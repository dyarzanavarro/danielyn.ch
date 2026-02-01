<template>
  <div
    ref="cursor"
    class="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[60] mix-blend-difference transition-transform duration-300 ease-out"
    :class="{ 'scale-150': isHovering, 'scale-75': isClicking }"
    :style="{ background: gradient }"
  >
    <div
      class="absolute inset-0 rounded-full opacity-30 animate-pulse"
      :style="{ background: gradient }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const cursor = ref(null);
const isHovering = ref(false);
const isClicking = ref(false);
const gradient =
  "linear-gradient(120deg, var(--accent-1), var(--accent-2), var(--accent-3))";

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

const updateCursor = () => {
  const ease = 0.15;
  cursorX += (mouseX - cursorX) * ease;
  cursorY += (mouseY - cursorY) * ease;

  if (cursor.value) {
    cursor.value.style.transform = `translate(${cursorX - 12}px, ${
      cursorY - 12
    }px)`;
  }

  requestAnimationFrame(updateCursor);
};

const handleMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const handleMouseEnter = (e) => {
  if (e.target.matches("a, button, [data-magnetic]")) {
    isHovering.value = true;
  }
};

const handleMouseLeave = (e) => {
  if (e.target.matches("a, button, [data-magnetic]")) {
    isHovering.value = false;
  }
};

const handleMouseDown = () => {
  isClicking.value = true;
};

const handleMouseUp = () => {
  isClicking.value = false;
};

onMounted(() => {
  if (process.client) {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    updateCursor();
  }
});

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseenter", handleMouseEnter, true);
    document.removeEventListener("mouseleave", handleMouseLeave, true);
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("mouseup", handleMouseUp);
  }
});
</script>

<style scoped>
@media (hover: none) {
  .fixed {
    display: none;
  }
}
</style>
