<script setup>
import { computed } from "vue";
import projects from "@/data/projects.js";

const featuredOrder = [
  "preppal",
  "yallo",
  "kollektivkitzeln",
  "portfolio",
  "psych",
  "hundeschule",
];

const featuredProjects = computed(() =>
  featuredOrder
    .map((key) => ({ slug: key, ...projects[key] }))
    .filter((project) => project.title)
);

const cardClass = (index) => {
  if (index === 0) return "xl:col-span-2 xl:row-span-2";
  if (index === 3) return "md:col-span-2";
  return "";
};
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    <NuxtLink
      v-for="(project, index) in featuredProjects"
      :key="project.slug"
      :to="`/projects/${project.slug}`"
      class="group relative overflow-hidden rounded-3xl glass-panel lift-hover"
      :class="cardClass(index)"
    >
      <div class="absolute inset-0">
        <img
          :src="project.heroImage"
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
        ></div>
      </div>

      <div class="relative z-10 p-6 md:p-8 min-h-[18rem] flex flex-col justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-white/70">
            Case Study
          </p>
          <h3 class="text-2xl md:text-3xl font-bold text-white mt-3">
            {{ project.title }}
          </h3>
          <p class="mt-4 text-sm md:text-base text-white/80 max-w-xl">
            {{ project.summary }}
          </p>
        </div>
        <span
          class="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/80"
        >
          View project
          <span class="text-lg leading-none">-&gt;</span>
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
