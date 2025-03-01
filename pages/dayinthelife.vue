<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvasRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!canvasRef.value) return;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    50,
    canvasRef.value.clientWidth / canvasRef.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 2, 5);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
  canvasRef.value.appendChild(renderer.domElement);

  // Lighting
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 7.5);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Load FBX Model
  const loader = new FBXLoader();
  loader.load("/models/InteriorRoom.fbx", (object) => {
    object.scale.set(0.01, 0.01, 0.01);
    scene.add(object);
  });

  const AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
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

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();

  // Resize handling
  window.addEventListener("resize", () => {
    camera.aspect =
      canvasRef.value!.clientWidth / canvasRef.value!.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
      canvasRef.value!.clientWidth,
      canvasRef.value!.clientHeight
    );
  });
});
</script>

<template>
  <div ref="canvasRef" class="w-full h-screen"></div>
</template>
