<template>
  <div class="min-h-screen pt-14 sm:pt-20 pb-20 px-6">
    <div class="max-w-screen-xl mx-auto">
      <div class="glass-panel rounded-3xl p-10 grid gap-6">
        <p class="eyebrow">404</p>
        <h1 class="text-4xl sm:text-5xl font-black">
          Looks like this page drifted off the map.
        </h1>
        <p class="text-lg text-muted">
          The page you are looking for does not exist or was moved.
        </p>
        <nuxt-link
          class="btn btn-primary w-fit"
          to="/"
        >
          Back home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
