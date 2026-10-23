<script setup>
import { products } from "@/data/projects.js";
</script>

<template>
  <div>
    <section class="px-4 sm:px-6 pt-14 sm:pt-24 pb-12 sm:pb-20">
      <div class="max-w-screen-xl mx-auto">
        <p class="eyebrow fade-up">Daniel Yarza Navarro · Product &amp; UX · Zurich</p>
        <h1
          class="fade-up mt-4 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl"
          style="animation-delay: 60ms"
        >
          I shape products by day and build my own by night.
        </h1>
        <p class="fade-up mt-6 text-lg sm:text-xl text-muted max-w-2xl" style="animation-delay: 120ms">
          Product and UX lead for Swiss e-commerce. Lately: a meal planner for the whole household,
          and an open-source ebook library for Windows.
        </p>
        <div class="fade-up mt-8 flex flex-wrap gap-3" style="animation-delay: 180ms">
          <NuxtLink to="/#projects" class="btn btn-primary">See what I'm building</NuxtLink>
          <a class="btn btn-ghost" href="mailto:danielyarza1@gmail.com?subject=Hi%20Daniel">Get in touch</a>
        </div>
      </div>
    </section>

    <section id="projects" class="px-4 sm:px-6 pb-16 sm:pb-24" aria-labelledby="projects-title">
      <div class="max-w-screen-xl mx-auto">
        <div class="mb-6 sm:mb-8">
          <p class="eyebrow">Now building</p>
          <h2 id="projects-title" class="mt-2 text-3xl sm:text-4xl font-black tracking-tight">Things I made and maintain</h2>
        </div>
        <div class="grid gap-6">
          <ProductCard slug="mise" :product="products.mise" />
          <ProductCard slug="shelfie" :product="products.shelfie" reverse />
        </div>
      </div>
    </section>

    <section id="work" class="px-4 sm:px-6 pb-16 sm:pb-24" aria-labelledby="work-title">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex items-end justify-between flex-wrap gap-4 mb-6 sm:mb-8">
          <div>
            <p class="eyebrow">Selected client work</p>
            <h2 id="work-title" class="mt-2 text-3xl sm:text-4xl font-black tracking-tight">Products I helped shape</h2>
          </div>
          <NuxtLink to="/work" class="link-arrow text-accent-1">All client work <span aria-hidden="true">→</span></NuxtLink>
        </div>
        <WorkCards />
      </div>
    </section>

    <section id="about" class="px-4 sm:px-6 pb-16" aria-labelledby="about-title">
      <div class="max-w-screen-xl mx-auto">
        <div class="mb-6 sm:mb-8">
          <p class="eyebrow">About</p>
          <h2 id="about-title" class="mt-2 text-3xl sm:text-4xl font-black tracking-tight">Between business, design and code</h2>
        </div>
        <ProfileCard />
      </div>
    </section>
  </div>
</template>
