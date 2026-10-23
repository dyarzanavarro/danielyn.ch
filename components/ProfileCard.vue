<template>
  <div class="grid gap-4 lg:grid-cols-[1.2fr,1fr]">
    <div class="card p-6 sm:p-10">
      <div class="flex items-center gap-4">
        <img
          class="w-20 h-20 rounded-2xl object-cover"
          src="/img/work/dan-portrait.webp"
          alt="Portrait of Daniel"
          width="80"
          height="80"
          loading="lazy"
        />
        <div>
          <h3 class="text-2xl font-black">Daniel Yarza Navarro</h3>
          <p class="text-muted">Product &amp; UX · Zurich</p>
        </div>
      </div>
      <p class="mt-6 text-lg leading-relaxed">
        I've spent my career between business, design and engineering, mostly on B2C e-commerce in
        Swiss telecom: design systems, re-platformings, A/B testing and the sprint rituals that
        hold it together.
      </p>
      <p class="mt-4 text-lg leading-relaxed text-muted">
        Outside work I build the tools I want to use myself, end to end. It keeps my product
        instincts honest: every decision lands on me as a user first.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="chip">Product ownership</span>
        <span class="chip">UX strategy</span>
        <span class="chip">Design systems</span>
        <span class="chip">Experimentation</span>
        <span class="chip">Vue / Nuxt</span>
        <span class="chip">TypeScript</span>
      </div>
    </div>

    <div class="grid gap-4">
      <div class="card p-6 sm:p-8">
        <h3 class="text-lg font-bold">Now</h3>
        <ul class="mt-3 grid gap-2 text-muted">
          <li>Shipping Mise to more households and testing a Coop basket integration.</li>
          <li>Growing Shelfie from a personal tool into something others can rely on.</li>
          <li>Building composable design systems for e-commerce UX.</li>
        </ul>
      </div>
      <div class="card p-6 sm:p-8">
        <h3 class="text-lg font-bold">How I work</h3>
        <p class="mt-3 text-muted">
          Lean discovery, fast prototypes with developers in the loop, and small releases that
          teach us something.
        </p>
        <NuxtLink to="/process" class="link-arrow mt-4 text-accent-1">My process <span aria-hidden="true">→</span></NuxtLink>
      </div>
    </div>
  </div>
</template>
