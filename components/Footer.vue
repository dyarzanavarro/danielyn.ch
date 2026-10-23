<template>
  <footer class="relative z-10 px-4 sm:px-6 pb-10 mt-8">
    <div class="max-w-screen-xl mx-auto">
      <div class="card px-6 sm:px-10 py-10 grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-end">
        <div>
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight">Let's build something useful.</h2>
          <p class="mt-3 text-muted max-w-xl">
            Open to product and UX roles, collaborations, and feedback on Mise or Shelfie.
          </p>
          <a class="btn btn-primary mt-6 max-w-full break-all" href="mailto:danielyarza1@gmail.com?subject=Hi%20Daniel">
            danielyarza1@gmail.com
          </a>
        </div>
        <nav aria-label="Footer" class="grid grid-cols-2 gap-x-6 gap-y-2 text-[0.9375rem] md:justify-self-end">
          <NuxtLink class="text-muted hover:text-ink py-1" to="/#projects">Projects</NuxtLink>
          <a class="text-muted hover:text-ink py-1" href="https://github.com/dyarzanavarro" rel="me">GitHub</a>
          <NuxtLink class="text-muted hover:text-ink py-1" to="/work">Client work</NuxtLink>
          <a class="text-muted hover:text-ink py-1" href="https://betterplan.ch">Mise</a>
          <NuxtLink class="text-muted hover:text-ink py-1" to="/process">Process</NuxtLink>
          <NuxtLink class="text-muted hover:text-ink py-1" to="/projects/shelfie">Shelfie</NuxtLink>
          <NuxtLink class="text-muted hover:text-ink py-1" to="/fun">Off-screen</NuxtLink>
        </nav>
      </div>
      <p class="mt-6 px-2 text-sm text-muted">© {{ year }} Daniel Yarza Navarro · Zurich</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
