<script setup>
import { ref } from "vue";
import projects from "@/data/projects.js";

const projectList = ref(Object.entries(projects));
</script>

<template>
  <div class="snap-section pt-24 sm:pt-28 lg:pt-32 pb-20 px-6">
    <div class="max-w-screen-xl mx-auto">
      <div class="max-w-3xl">
        <p class="text-xs uppercase tracking-[0.4em] text-muted">Work</p>
        <h1 class="text-4xl sm:text-5xl font-black mt-4 break-words">
          Projects that balance clarity, craft, and measurable impact.
        </h1>
        <p class="mt-6 text-lg text-muted">
          From design systems to full product migrations, these case studies
          show how I collaborate, de-risk, and deliver with velocity.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <nuxt-link
          v-for="[slug, project] in projectList"
          :key="slug"
          :to="`/projects/${slug}`"
          class="group rounded-3xl glass-panel overflow-hidden lift-hover"
        >
          <div class="relative h-56">
            <img
              :src="project.heroImage"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
            ></div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-ink">{{ project.title }}</h2>
            <p class="mt-3 text-sm text-muted">
              {{ project.summary }}
            </p>
            <span
              class="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted"
            >
              Explore case study
              <span class="text-lg leading-none">-&gt;</span>
            </span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
