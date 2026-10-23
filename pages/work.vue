<script setup>
usePageSeo({
  title: "Client work: UX, design systems and A/B testing · Daniel Yarza Navarro",
  description:
    "Product and UX case studies by Daniel Yarza Navarro: design systems and re-platforming for Yallo, A/B testing for Sunrise, and brand sites for Swiss businesses.",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Client work", path: "/work" },
  ],
});
</script>

<template>
  <div class="px-4 sm:px-6 pt-14 sm:pt-20 pb-16">
    <div class="max-w-screen-xl mx-auto">
      <div class="max-w-3xl">
        <p class="eyebrow">Client work</p>
        <h1 class="mt-3 text-4xl sm:text-5xl font-black tracking-tight">Products I helped shape</h1>
        <p class="mt-5 text-lg text-muted">
          From design systems to full re-platformings, mostly in Swiss e-commerce and telecom,
          plus a few brand sites for people I like working with.
        </p>
      </div>
      <div class="mt-10">
        <WorkCards />
      </div>
      <div class="mt-12 card p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
        <p class="text-lg"><span class="font-bold">Looking for my own products?</span> <span class="text-muted">Mise and Shelfie are on the home page.</span></p>
        <NuxtLink to="/#projects" class="btn btn-ghost">See Mise &amp; Shelfie</NuxtLink>
      </div>
    </div>
  </div>
</template>
