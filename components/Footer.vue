<template>
  <footer class="px-6 pb-12">
    <div class="max-w-screen-xl mx-auto">
      <div class="glass-subtle rounded-3xl px-8 py-10 flex flex-col gap-6 items-start">
        <NuxtLink
          to="/"
          class="text-lg font-bold tracking-[0.35em] uppercase text-ink"
        >
          dyn
        </NuxtLink>
        <div>
          <h2 class="text-3xl sm:text-4xl font-black">
            Lets build something that feels inevitable.
          </h2>
          <p class="mt-4 text-muted max-w-2xl">
            Open to collaborations, product strategy chats, and experimental UX
            ideas.
          </p>
        </div>
        <a
          class="inline-flex items-center justify-center rounded-full bg-accent-2 text-white px-6 py-3 text-xs uppercase tracking-[0.3em] shadow-glow-coral lift-hover"
          :href="`mailto:danielyarza1@gmail.com?subject=Lets%20connect`"
        >
          Contact me
        </a>
        <p class="text-xs uppercase tracking-[0.3em] text-muted">
          (C) {{ year }} Daniel Yarza Navarro
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>
