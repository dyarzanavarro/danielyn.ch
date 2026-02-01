<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "@/data/projects.js";

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const project = ref(projects[route.params.slug] || null);

onMounted(() => {
  gsap.fromTo(
    ".fade-in",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: ".fade-in",
    }
  );
});
</script>

<template>
  <div class="pt-24 sm:pt-28 lg:pt-32 pb-20 px-6">
    <div v-if="project" class="max-w-screen-xl mx-auto">
      <div class="snap-section grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div>
          <p class="fade-in text-xs uppercase tracking-[0.4em] text-muted">
            Case study
          </p>
          <h1 class="fade-in text-4xl sm:text-5xl font-black mt-4 break-words">
            {{ project.title }}
          </h1>
          <p class="fade-in mt-6 text-lg text-muted max-w-2xl">
            {{ project.summary }}
          </p>
        </div>
        <div class="fade-in rounded-3xl overflow-hidden glass-panel">
          <img
            class="w-full h-full object-cover"
            :src="project.heroImage"
            alt="Project preview"
          />
        </div>
      </div>

      <div class="snap-section mt-14 grid gap-6 md:grid-cols-2">
        <div class="fade-in glass-panel rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.3em] text-muted">
            The UX challenge
          </p>
          <p class="mt-4 text-lg text-muted">
            {{ project.uxChallenge }}
          </p>
        </div>
        <div class="fade-in glass-panel rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.3em] text-muted">
            The solution
          </p>
          <p class="mt-4 text-lg text-muted">
            {{ project.solution }}
          </p>
        </div>
      </div>

      <div class="snap-section mt-14 fade-in glass-subtle rounded-3xl p-8">
        <p class="text-xs uppercase tracking-[0.3em] text-muted">
          How it was built
        </p>
        <p class="mt-4 text-lg text-muted max-w-3xl">
          {{ project.development }}
        </p>
      </div>

      <div
        v-if="project.images && project.images.length"
        class="snap-section mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <img
          v-for="image in project.images"
          :key="image"
          :src="image"
          class="fade-in rounded-2xl shadow-lg"
          alt="Project screenshot"
        />
      </div>

      <div class="snap-section mt-14 fade-in glass-panel rounded-3xl p-8">
        <p class="text-xs uppercase tracking-[0.3em] text-muted">
          Key takeaways
        </p>
        <ul class="mt-4 space-y-3 text-muted">
          <li v-for="takeaway in project.takeaways" :key="takeaway">
            - {{ takeaway }}
          </li>
        </ul>
      </div>
    </div>

    <div v-else class="max-w-screen-xl mx-auto">
      <p class="text-muted">Project not found.</p>
    </div>
  </div>
</template>
