<template>
  <header class="sticky top-0 z-50">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 pt-4">
      <div class="glass-panel rounded-2xl pl-5 pr-2 py-2 flex items-center justify-between gap-4">
        <NuxtLink to="/" class="font-black text-lg tracking-tight text-ink" aria-label="danielyn.ch home">
          dyn<span class="text-accent-2">.</span>
        </NuxtLink>

        <nav aria-label="Main" class="hidden md:flex items-center gap-1 text-[0.9375rem] font-medium">
          <NuxtLink
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="rounded-full px-4 py-2 text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-1">
          <!-- The stored theme is only known in the browser, so render the toggle there. -->
          <ClientOnly>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full w-11 h-11 text-muted hover:text-ink transition"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="toggleTheme"
            >
              <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            </button>
            <template #fallback><span class="inline-block w-11 h-11" aria-hidden="true"></span></template>
          </ClientOnly>
          <span class="hidden sm:block">
            <a class="btn btn-primary" href="mailto:danielyarza1@gmail.com?subject=Hi%20Daniel">Get in touch</a>
          </span>
          <button
            type="button"
            class="md:hidden inline-flex items-center justify-center rounded-full w-11 h-11 text-ink"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
            aria-label="Menu"
            @click="isOpen = !isOpen"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path v-if="isOpen" d="M6 6l12 12M18 6L6 18" />
              <path v-else d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <nav
        v-if="isOpen"
        id="mobile-menu"
        aria-label="Main"
        class="md:hidden glass-panel rounded-2xl mt-2 p-2 grid text-base font-medium"
      >
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="rounded-xl px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <a class="rounded-xl px-4 py-3 text-accent-1" href="mailto:danielyarza1@gmail.com?subject=Hi%20Daniel">
          Get in touch
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";

const items = [
  { label: "Projects", to: "/#projects" },
  { label: "Client work", to: "/work" },
  { label: "About", to: "/#about" },
];

const colorMode = useColorMode();
const isOpen = ref(false);
const isDark = computed(() => colorMode.value === "dark");

const toggleTheme = () => {
  colorMode.preference = isDark.value ? "light" : "dark";
};
</script>
