<script setup>
import { ref } from "vue";
import projects from "@/data/projects.js";
const projectList = ref(Object.entries(projects));
</script>

<template>
  <div
    class="min-h-screen bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
  >
    <!-- Page Header -->
    <div class="justify-center w-full px-4 pt-32 text-center">
      <h1
        class="bg-clip-text text-transparent bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-5xl lg:text-7xl font-bold"
      >
        Work I'm OK With
      </h1>
      <p
        class="mt-4 text-gray-800 dark:text-gray-400 text-lg lg:text-2xl max-w-2xl mx-auto"
      >
        Dipping my toes in SCRUM product ownership & creating intuitive user
        journeys that drive up value and support long-term growth.
      </p>
    </div>

    <!-- Project Cards Grid -->
    <div class="container px-4 lg:pt-8 pt-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <nuxt-link
          v-for="[slug, project] in projectList"
          :key="slug"
          :to="`/projects/${slug}`"
        >
          <div
            class="group bg-stone-100 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <!-- Project Image -->
            <img
              :src="project.heroImage"
              :alt="project.title"
              class="w-full h-64 object-cover rounded-t-xl group-hover:opacity-80 transition-opacity"
            />

            <!-- Project Details -->
            <div class="p-6">
              <h2
                class="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-indigo-500 transition-colors"
              >
                {{ project.title }}
              </h2>
              <p class="mt-2 text-gray-700 dark:text-gray-300 text-lg">
                {{ project.summary }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>