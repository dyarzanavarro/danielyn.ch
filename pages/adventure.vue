<template>
  <div>
    <canvas ref="experience"></canvas>
    <div
      v-show="isPaused"
      class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      {{ console.log("Pause menu should be visible:", isPaused) }}
      <div class="text-center">
        <h1 class="text-white text-4xl mb-4">Game Paused</h1>
        <button
          @click="togglePause"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Resume Game
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { Ref } from "vue";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";
import { setUncaughtExceptionCaptureCallback } from "process";

const isPaused = ref(false);

let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
const experience: Ref<HTMLCanvasElement | null> = ref(null);

const aspectRatio = computed(() => window.innerWidth / window.innerHeight);
const scene = new THREE.Scene();
const width = 1200;
const height = 600;
let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

const AmbientLight = new THREE.AmbientLight(0xffffff, 1);
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-60, 100, -10);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = -50;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.right = 50;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 200;
dirLight.shadow.mapSize.width = 4096;
dirLight.shadow.mapSize.height = 4096;
scene.add(dirLight);
scene.add(AmbientLight);

// MODEL WITH ANIMATIONS

async function loadShip() {
  let ship = await new Promise((resolve, reject) => {
    const fbxLoader = new FBXLoader();
    fbxLoader.load("/models/BoatWSail.fbx", (object) => {
      object.traverse(function (object: any) {
        if (object.isMesh) object.castShadow = true;
      });
      resolve(object);
    });
  });

  scene.add(ship);
  return ship;
}

let ship;
loadShip().then((loadedShip) => {
  ship = loadedShip;
});

// Generate a terrain
let mesh, texture;

const worldWidth = 256,
  worldDepth = 256;

const data = generateHeight(worldWidth, worldDepth);

const geometry = new THREE.PlaneGeometry(
  7500,
  7500,
  worldWidth - 1,
  worldDepth - 1
);
geometry.rotateX(-Math.PI / 2);

const vertices = geometry.attributes.position.array;

for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
  vertices[j + 1] = data[i] * 10;
}

// Generate coins

const coinGeometry = new THREE.SphereGeometry(6, 64, 64); // Adjust size as needed
const coinMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 }); // Gold color for coins
const coins = [];

function generateCoins() {
  const coin = new THREE.Mesh(coinGeometry, coinMaterial);
  const offsetRange = 150; // Adjust the range around the boat where coins can appear
  const x = ship.position.x + (Math.random() - 0.5) * 2 * offsetRange;
  const z = ship.position.z + (Math.random() - 0.5) * 2 * offsetRange;
  const y = 10; // Height above the water surface
  coin.position.set(x, y, z);
  scene.add(coin);
  coins.push(coin);
}

texture = new THREE.CanvasTexture(
  generateTexture(data, worldWidth, worldDepth)
);
texture.wrapS = THREE.ClampToEdgeWrapping;
texture.wrapT = THREE.ClampToEdgeWrapping;

mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: texture }));
scene.add(mesh);
mesh.position.set(0, -800, 0);

function generateHeight(width, height) {
  const size = width * height,
    data = new Uint8Array(size),
    perlin = new ImprovedNoise(),
    z = Math.random() * 100;

  let quality = 1;

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width,
        y = ~~(i / width);
      data[i] += Math.abs(
        perlin.noise(x / quality, y / quality, z) * quality * 1.75
      );
    }

    quality *= 5;
  }

  return data;
}

function generateTexture(data, width, height) {
  // bake lighting into texture for terrain

  let context, image, imageData, shade;

  const vector3 = new THREE.Vector3(0, 0, 0);

  const sun = new THREE.Vector3(1, 1, 1);
  sun.normalize();

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  context = canvas.getContext("2d");
  context.fillStyle = "#000";
  context.fillRect(0, 0, width, height);

  image = context.getImageData(0, 0, canvas.width, canvas.height);
  imageData = image.data;

  for (let i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
    vector3.x = data[j - 2] - data[j + 2];
    vector3.y = 2;
    vector3.z = data[j - width * 2] - data[j + width * 2];
    vector3.normalize();

    shade = vector3.dot(sun);

    imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007);
    imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007);
    imageData[i + 2] = shade * 96 * (0.5 + data[j] * 0.007);
  }

  context.putImageData(image, 0, 0);

  const canvasScaled = document.createElement("canvas");
  canvasScaled.width = width * 4;
  canvasScaled.height = height * 4;

  context = canvasScaled.getContext("2d");
  context.scale(4, 4);
  context.drawImage(canvas, 0, 0);

  image = context.getImageData(0, 0, canvasScaled.width, canvasScaled.height);
  imageData = image.data;

  for (let i = 0, l = imageData.length; i < l; i += 4) {
    const v = ~~(Math.random() * 5);

    imageData[i] += v;
    imageData[i + 1] += v;
    imageData[i + 2] += v;
  }

  context.putImageData(image, 0, 0);

  return canvasScaled;
}

let keys = {
  a: false,
  s: false,
  d: false,
  w: false,
  forward: false,
  backward: false,
  left: false,
  right: false,
};

let a = new THREE.Vector3();

let velocity = 0.0;
let speed = 0.0;

document.body.addEventListener("keydown", function (e) {
  let key = e.code.replace("Key", "").toLowerCase();
  if (keys[key] !== undefined) keys[key] = true;
});
document.body.addEventListener("keyup", function (e) {
  let key = e.code.replace("Key", "").toLowerCase();
  if (keys[key] !== undefined) keys[key] = false;
});

document.body.addEventListener("touchstart", function (e) {
  let touch = e.touches[0];
  let x = touch.clientX;
  let y = touch.clientY;

  // check if the touch is on the left or right side of the screen
  if (x < window.innerWidth / 2) {
    keys.left = true;
  } else {
    keys.right = true;
  }
});
document.body.addEventListener("touchend", function (e) {
  keys.left = false;
  keys.right = false;
});
document.body.addEventListener("touchmove", function (e) {
  let touch = e.touches[0];
  let x = touch.clientX;
  let y = touch.clientY;

  // check if the user is swiping up or down
  if (y < window.innerHeight / 2) {
    keys.forward = true;
  } else {
    keys.backward = true;
  }
});

let coinSpawnTimer = 0;
const coinSpawnInterval = 1; // Time in seconds between coin spawns
let clock = new THREE.Clock();

function animate() {
  if (isPaused.value) return; // Stop the animation loop if paused

  requestAnimationFrame(animate);

  if (keys.w) speed = 0.01;
  else if (keys.s) speed = 0.005;

  if (keys.forward) speed = 0.01;
  else if (keys.backward) speed = 0.005;

  velocity += (speed - velocity) * 0.03;
  ship.translateZ(velocity);
  if (keys.a) {
    ship.rotateY(0.0001);
  } else if (keys.d) {
    ship.rotateY(-0.0001);
  }
  if (keys.left) {
    ship.rotateY(0.0001);
  } else if (keys.right) {
    ship.rotateY(-0.0001);
  }

  const deltaTime = clock.getDelta(); // Assuming you have a THREE.Clock instance

  // Coin generation
  coinSpawnTimer += deltaTime;
  if (coinSpawnTimer > coinSpawnInterval) {
    generateCoins();
    coinSpawnTimer = 0;
  }

  // Collision detection
  coins.forEach((coin, index) => {
    if (ship.position.distanceTo(coin.position) < 30) {
      // Adjust collision distance as needed
      scene.remove(coin);
      coins.splice(index, 1);
      // Increment score or perform other action on coin collection
    }
  });

  a.lerp(ship.position, 0.2);
  a.lerp(ship.rotation, 0.2);

  camera.lookAt(ship.position);
  camera.position.set(50, 100, -360);
  camera.fov = 600 / ship.position.distanceTo(camera.position);
  ship.add(camera);
}

function togglePause() {
  console.log("Toggling pause. Current state:", isPaused.value);
  isPaused.value = !isPaused.value;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    togglePause();
  }
});
// Water

const waterGeometry = new THREE.PlaneGeometry(150000, 150000);
let sun = new THREE.Vector3();
let water = new Water(waterGeometry, {
  textureWidth: 512,
  textureHeight: 512,
  waterNormals: new THREE.TextureLoader().load(
    "img/waternormals.jpg",
    function (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }
  ),
  sunDirection: new THREE.Vector3(),
  sunColor: 0xffffff,
  waterColor: "#1ec8ff",
  transparent: true,
  opacity: 0.99,
  distortionScale: 3.7,
  fog: scene.fog !== undefined,
});

water.rotation.x = -Math.PI / 2;
scene.add(water);

// Skybox

const sky = new Sky();
sky.scale.setScalar(10000);
scene.add(sky);

const skyUniforms = sky.material.uniforms;

skyUniforms["turbidity"].value = 7;
skyUniforms["rayleigh"].value = 2;
skyUniforms["mieCoefficient"].value = 0.005;
skyUniforms["mieDirectionalG"].value = 0.8;

const parameters = {
  elevation: 3,
  azimuth: 20,
};

let renderTarget;

function updateSun() {
  const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
  const theta = THREE.MathUtils.degToRad(parameters.azimuth);

  sun.setFromSphericalCoords(1, phi, theta);

  sky.material.uniforms["sunPosition"].value.copy(sun);
  water.material.uniforms["sunDirection"].value.copy(sun).normalize();

  if (renderTarget !== undefined) renderTarget.dispose();
}

updateSun();

// ANIMATE

function updateCamera() {
  camera.aspect = aspectRatio.value;
}
function updateRenderer() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  water.material.uniforms["time"].value += 1.0 / 60.0;
}

function setRenderer() {
  if (experience.value) {
    renderer = new THREE.WebGLRenderer({
      canvas: experience.value,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

watch(aspectRatio, () => {
  updateCamera();
});
onMounted(() => {
  setRenderer();
  loop();
});
const loop = () => {
  updateRenderer();
  requestAnimationFrame(loop);
  animate();
};
</script>

