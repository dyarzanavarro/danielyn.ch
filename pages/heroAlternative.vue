<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { Ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { KeyDisplay } from "~~/composables/utils";
import { CharacterControls } from "~~/composables/characterControls";

let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
const experience: Ref<HTMLCanvasElement | null> = ref(null);

const aspectRatio = computed(() => window.innerWidth / window.innerHeight);
const scene = new THREE.Scene();
const width = 1200;
const height = 600;
const camera = new THREE.PerspectiveCamera(75, aspectRatio.value, 0.1, 2000);

const bgColor = new THREE.Color("#E1F0C2");

const AmbientLight = new THREE.AmbientLight(0xffffff, 1.4);
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
console.log(ship);

let keys = {
  a: false,
  s: false,
  d: false,
  w: false,
};
let time = 0;
let newPosition = new THREE.Vector3();
let matrix = new THREE.Matrix4();

let stop = 1;
let DEGTORAD = 0.01745327;
let temp = new THREE.Vector3();
let dir = new THREE.Vector3();
let eye = new THREE.Vector3();
let a = new THREE.Vector3();
let b = new THREE.Vector3();
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let environment = [];
let coronaSafetyDistance = 0.3;
let goalDistance = coronaSafetyDistance;
let velocity = 0.0;
let speed = 0.0;

let goal = new THREE.Object3D();
let follow = new THREE.Object3D();

document.body.addEventListener("mousemove", function (e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

document.body.addEventListener("keydown", function (e) {
  let key = e.code.replace("Key", "").toLowerCase();
  if (keys[key] !== undefined) keys[key] = true;
});
document.body.addEventListener("keyup", function (e) {
  let key = e.code.replace("Key", "").toLowerCase();
  if (keys[key] !== undefined) keys[key] = false;
});

function animate() {
  requestAnimationFrame(animate);

  if (keys.w) speed = 0.01;
  else if (keys.s) speed = -0.01;

  velocity += (speed - velocity) * 0.08;
  ship.translateZ(velocity);

  if (keys.a) ship.rotateY(0.0005);
  else if (keys.d) ship.rotateY(-0.0005);

  a.lerp(ship.position, 0.2);
  b.copy(goal.position);

  dir.copy(a).sub(b).normalize();

  eye.copy(dir).negate();
  raycaster.set(a, eye);
  let intersects = raycaster.intersectObjects(environment);

  let distance = coronaSafetyDistance;

  if (intersects && intersects.length) {
    let space = intersects[0].distance;
    let radius = 0.2;

    // Pick the shorter distance
    distance = Math.min(distance, space - radius);
  }

  goalDistance += (distance - goalDistance) * 0.2;

  let dis = a.distanceTo(b) - goalDistance;

  goal.position.addScaledVector(dir, dis);
  temp.setFromMatrixPosition(follow.matrixWorld);
  goal.position.lerp(temp, 0.02);

  var offset = new THREE.Vector3(
    ship.position.x + 20,
    ship.position.y + 20,
    ship.position.z
  );

  camera.position.set(30, 50, -190);
  ship.add(camera);
}

//water
const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
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

  waterColor: 0x001e0f,
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

skyUniforms["turbidity"].value = 10;
skyUniforms["rayleigh"].value = 2;
skyUniforms["mieCoefficient"].value = 0.005;
skyUniforms["mieDirectionalG"].value = 0.8;

const parameters = {
  elevation: 2,
  azimuth: 120,
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

const clock = new THREE.Clock();
// ANIMATE

function updateCamera() {
  camera.aspect = aspectRatio.value;
  var offset = new THREE.Vector3(
    ship.position.x + 20,
    ship.position.y + 6,
    ship.position.z
  );

  camera.position.lerp(offset, 0.2);

  camera.lookAt(ship.position);

  camera.updateProjectionMatrix();
}
function updateRenderer() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  //water render

  water.material.uniforms["time"].value += 1.0 / 60.0;
}

function setRenderer() {
  if (experience.value) {
    renderer = new THREE.WebGLRenderer({
      canvas: experience.value,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    //OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = 1;
    controls.minDistance = 45;
    controls.maxDistance = 155;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 0.1;
  }
}

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
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

