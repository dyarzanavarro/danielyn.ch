<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "@/data/projects.js";
gsap.registerPlugin(ScrollTrigger);

// Fetch project based on slug
const route = useRoute();
const project = ref(projects[route.params.slug] || null);
// GSAP animations
onMounted(() => {
  gsap.fromTo(
    ".fade-in",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: ".fade-in",
    }
  );
  gsap.fromTo(
    ".image-animate",
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: ".image-animate",
    }
  );
});
</script>

<template>
  <div class="max-w-screen-xl px-6 mx-auto pt-32">
    <!-- Hero Section -->
    <div class="relative text-center">
      <h1
        class="fade-in text-6xl font-extrabold bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] bg-clip-text text-transparent"
      >
        {{ project.title }}
      </h1>
      <p
        class="fade-in text-gray-700 dark:text-gray-300 text-lg mt-4 max-w-3xl mx-auto"
      >
        {{ project.summary }}
      </p>
      <img
        class="image-animate rounded-xl shadow-lg w-full object-cover mt-8"
        :src="project.heroImage"
        alt="Project preview"
      />
    </div>

    <!-- UX Challenge & Solution -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="fade-in text-4xl font-bold text-gray-800 dark:text-gray-100">
          The UX Challenge
        </h2>
        <p class="fade-in text-lg text-gray-700 dark:text-gray-300 mt-4">
          {{ project.uxChallenge }}
        </p>
      </div>
      <div>
        <h2 class="fade-in text-4xl font-bold text-gray-800 dark:text-gray-100">
          The Solution
        </h2>
        <p class="fade-in text-lg text-gray-700 dark:text-gray-300 mt-4">
          {{ project.solution }}
        </p>
      </div>
    </div>

    <!-- Development Section -->
    <div class="mt-12">
      <h2
        class="fade-in text-4xl font-bold text-gray-800 dark:text-gray-100 text-center"
      >
        How It Was Built
      </h2>
      <p
        class="fade-in text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-center"
      >
        {{ project.development }}
      </p>
    </div>

    <!-- Image Gallery -->
    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <img
        v-for="image in project.images"
        :key="image"
        :src="image"
        class="image-animate rounded-lg shadow-lg"
        alt="Project screenshot"
      />
    </div>

    <!-- Key Takeaways -->
    <div class="mt-12">
      <h2
        class="fade-in text-4xl font-bold text-gray-800 dark:text-gray-100 text-center"
      >
        Key Takeaways
      </h2>
      <ul
        class="fade-in mt-4 space-y-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
      >
        <li v-for="takeaway in project.takeaways" :key="takeaway">
          ✅ {{ takeaway }}
        </li>
      </ul>
    </div>
  </div>
</template>
