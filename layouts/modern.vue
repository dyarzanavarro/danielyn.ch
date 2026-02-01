<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-gray-200 transition-all duration-500"
  >
    <!-- Global cursor -->
    <MagneticCursor />

    <!-- Page content -->
    <main class="relative">
      <slot />
    </main>

    <!-- Global styles for smooth interactions -->
    <div class="fixed inset-0 pointer-events-none">
      <!-- Ambient gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 animate-pulse-glow"
      ></div>
    </div>
  </div>
</template>

<script setup>
// Global smooth scroll setup
onMounted(() => {
  if (process.client) {
    // Disable default cursor on hover-capable devices
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (mediaQuery.matches) {
      document.body.style.cursor = "none";
    }
  }
});
</script>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Enhanced selection colors */
::selection {
  background: linear-gradient(45deg, #44bcff, #ff44ec);
  color: white;
}

::-moz-selection {
  background: linear-gradient(45deg, #44bcff, #ff44ec);
  color: white;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #44bcff, #ff44ec);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #3aa8e6, #e63ad9);
}
</style>