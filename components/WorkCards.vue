<script setup>
import { work } from "@/data/projects.js";

const projects = Object.entries(work).map(([slug, project]) => ({ slug, ...project }));
</script>

<template>
  <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="project in projects" :key="project.slug">
      <NuxtLink
        :to="`/projects/${project.slug}`"
        class="group card overflow-hidden flex flex-col h-full lift-hover"
      >
        <div class="aspect-[16/10] overflow-hidden" style="background: var(--surface-2)">
          <img
            :src="project.heroImage"
            :alt="`${project.title} project preview`"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div class="p-5 flex flex-col gap-2 flex-1">
          <h3 class="text-xl font-bold">{{ project.title }}</h3>
          <p class="text-muted">{{ project.tagline }}</p>
          <div class="mt-auto pt-3 flex flex-wrap gap-1.5">
            <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
