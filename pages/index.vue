<script setup>
import { onMounted, ref } from "vue";
const { $gsap } = useNuxtApp();

// Refs for elements
const heroText = ref(null);
const button = ref(null);
const workSection = ref(null);
const profileSection = ref(null);

// Data
const introMessage = ref([
  "Daniel is a UX Advocate working in B2C E-commerce in Zurich",
  "Daniel is a guy that likes good food",
  "Daniel loves AI, XR, and UX - (all buzzwords in one)",
  "Daniel in the third person is weird",
  "Daniel has a background in computer science",
  "Daniel is a problem-solver",
  "Daniel enjoys traveling and experiencing new cultures",
]);
const i = ref(0);

// Animations
onMounted(() => {
  // Change intro message every 6s
  setInterval(() => {
    i.value = (i.value + 1) % introMessage.value.length;
  }, 6000);

  // Animate hero text
  $gsap.fromTo(
    heroText.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );

  // Button hover effect
  $gsap.fromTo(
    button.value,
    { scale: 1 },
    {
      scale: 1.1,
      duration: 0.3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      paused: true,
    }
  );

  // Fade-in effect for "Selected Work" & "Profile & Contact" sections
  $gsap.fromTo(
    workSection.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: workSection.value,
        start: "top 85%",
      },
    }
  );

  $gsap.fromTo(
    profileSection.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: profileSection.value,
        start: "top 85%",
      },
    }
  );
});
</script>

<template>
  <div
    class="min-h-screen bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
  >
    <!-- Centered Hero Section -->
    <div
      class="h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h1
        ref="heroText"
        class="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] bg-clip-text text-transparent"
      >
        {{ introMessage[i] }}
      </h1>
      <p class="mt-4 text-lg lg:text-2xl opacity-80 max-w-3xl">
        Nowadays, I'm dipping my toes in SCRUM product ownership & creating
        intuitive user journeys that drive up value and support long-term
        growth.
      </p>

      <!-- CTA Button -->
      <nuxt-link
        ref="button"
        class="relative inline-flex mt-6 group"
        to="/process"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md opacity-30 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
        <div
          class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg text-gray-800 dark:text-gray-200 border border-transparent transition-all hover:scale-105 backdrop-blur-lg bg-opacity-10"
        >
          Learn more about me
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </nuxt-link>
    </div>

    <!-- Selected Work Section -->
    <div class="justify-center max-w-screen-xl px-4 py-8 mx-auto pt-6">
      <h2
        ref="workTitle"
        class="text-center text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"
      >
        Selected Work
      </h2>
      <work-cards />
    </div>

    <!-- Profile & Contact Section -->
    <div class="justify-center max-w-screen-xl px-4 py-8 mx-auto pt-12">
      <h2
        ref="profileTitle"
        class="text-center text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"
      >
        Profile & Contact
      </h2>
      <profile-card />
    </div>
  </div>
</template>