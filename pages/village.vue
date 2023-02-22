<template>
  <TresCanvas color="orange">
    <TresPerspectiveCamera />
    <TresScene>
      <TresMesh>
        <TresTorusGeometry />
        <TresMeshBasicMaterial color="orange" />
      </TresMesh>
    </TresScene>
  </TresCanvas>
</template>

<script lang="ts">
import * as THREE from "three";
const raycaster = new THREE.Raycaster();
</script>