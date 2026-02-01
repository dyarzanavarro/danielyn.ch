<template>
  <header class="sticky top-0 z-50">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 pt-6">
      <div
        class="glass-panel rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4"
      >
        <NuxtLink
          to="/"
          class="text-lg sm:text-xl font-bold tracking-[0.35em] uppercase text-ink"
        >
          dyn
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-muted">
          <NuxtLink class="hover:text-ink transition" to="/work">Work</NuxtLink>
          <NuxtLink class="hover:text-ink transition" to="/process">Process</NuxtLink>
          <NuxtLink class="hover:text-ink transition" to="/fun">Fun</NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <button
            class="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted hover:text-ink transition"
            @click="toggleTheme"
            aria-label="Toggle color mode"
          >
            <span v-if="colorMode.value === 'dark'">Light</span>
            <span v-else>Dark</span>
          </button>
          <a
            class="hidden sm:inline-flex items-center justify-center rounded-full bg-accent-2 text-white px-4 py-2 text-xs uppercase tracking-[0.25em] shadow-glow-coral lift-hover"
            href="mailto:danielyarza1@gmail.com?subject=Let's%20connect!"
            data-magnetic
          >
            Let's Talk
          </a>
          <button
            class="md:hidden inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 w-11 h-11"
            @click="toggleMenu"
            aria-label="Toggle navigation"
          >
            <span class="flex flex-col items-center justify-center gap-1">
              <span class="block w-5 h-[2px] bg-ink"></span>
              <span class="block w-5 h-[2px] bg-ink"></span>
              <span class="block w-5 h-[2px] bg-ink"></span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden px-4 sm:px-6 pt-4">
      <div class="glass-panel rounded-2xl px-6 py-4 space-y-4 text-sm uppercase tracking-[0.25em] text-muted">
        <NuxtLink class="block hover:text-ink" to="/work" @click="toggleMenu">Work</NuxtLink>
        <NuxtLink class="block hover:text-ink" to="/process" @click="toggleMenu">Process</NuxtLink>
        <NuxtLink class="block hover:text-ink" to="/fun" @click="toggleMenu">Fun</NuxtLink>
        <a
          class="inline-flex items-center justify-center rounded-full bg-accent-2 text-white px-4 py-2 text-xs uppercase tracking-[0.25em] shadow-glow-coral lift-hover"
          href="mailto:danielyarza1@gmail.com?subject=Let's%20connect!"
        >
          Let's Talk
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const colorMode = useColorMode();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>
