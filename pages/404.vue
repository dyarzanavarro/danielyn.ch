<template>
  <div class="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-20 px-6">
    <div class="max-w-screen-xl mx-auto">
      <div class="glass-panel rounded-3xl p-10 grid gap-6">
        <p class="text-xs uppercase tracking-[0.4em] text-muted">404</p>
        <h1 class="text-4xl sm:text-5xl font-black">
          Looks like this page drifted off the map.
        </h1>
        <p class="text-lg text-muted">
          The page you are looking for does not exist or was moved.
        </p>
        <nuxt-link
          class="inline-flex items-center justify-center rounded-full bg-accent-1 text-white px-6 py-3 text-xs uppercase tracking-[0.3em] shadow-glow-blue lift-hover w-fit"
          to="/"
        >
          Back home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
