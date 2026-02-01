<template>
  <div ref="container" class="overflow-hidden">
    <div ref="textElement" class="inline-block">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 1.2,
  },
  stagger: {
    type: Number,
    default: 0.02,
  },
});

const container = ref(null);
const textElement = ref(null);
const { $gsap } = useNuxtApp();

onMounted(() => {
  if (process.client && $gsap) {
    // Simple fade in animation without ScrollTrigger for now
    $gsap.fromTo(
      textElement.value,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: props.duration,
        delay: props.delay,
        ease: "power3.out",
      }
    );
  }
});
</script>