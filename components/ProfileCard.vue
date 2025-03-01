<script setup>
import { onMounted, ref } from "vue";
const { $gsap } = useNuxtApp();

const profileCard = ref(null);
const profileImage = ref(null);

// GSAP Animations
onMounted(() => {
  // Fade-in effect on scroll
  $gsap.fromTo(
    profileCard.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: profileCard.value,
        start: "top 85%",
      },
    }
  );

  // Parallax hover effect
  profileCard.value.addEventListener("mousemove", (e) => {
    const { width, height, left, top } =
      profileCard.value.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    $gsap.to(profileImage.value, {
      x: x,
      y: y,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  profileCard.value.addEventListener("mouseleave", () => {
    $gsap.to(profileImage.value, { x: 0, y: 0, duration: 0.3 });
  });
});
</script>

<template>
  <div ref="profileCard" class="pt-6 w-full max-w-screen-xl dark:bg-slate-900">
    <div
      class="bg-stone-100 dark:bg-gray-700 shadow-lg rounded-xl overflow-hidden"
    >
      <div class="relative bg-slate-100 dark:bg-gray-800">
        <img
          class="h-64 w-full object-cover shadow-lg"
          src="/img/citypop_mood-min.png"
          alt="Cover"
        />

        <!-- Profile Image with Parallax -->
        <div
          class="absolute inset-x-0 bottom-0 flex justify-center transform translate-y-1/2"
        >
          <img
            ref="profileImage"
            class="w-38 h-28 rounded-full border-4 border-white shadow-lg dark:border-gray-800"
            src="/img/citypop_Dan4-min.png"
            alt="Daniel profile image"
          />
        </div>
      </div>

      <div class="px-6 pt-14 pb-10 text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Daniel Yarza Navarro
        </h2>
        <div
          class="text-sm bg-indigo-600 text-white px-4 py-1 mt-2 inline-block rounded-full"
        >
          Excited
        </div>

        <p class="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Passionate problem solver in a digital environment - always open to
          talk shop or brainstorm new ideas! PS: mention WebXR and I will talk
          your ear off for at least an hour.
        </p>

        <a
          ref="button"
          class="relative inline-flex mt-6 group"
          :href="`mailto:danielyarza1@gmail.com?subject=Let's connect!`"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md opacity-30 transition-opacity duration-300 group-hover:opacity-100"
          ></div>
          <div
            class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg text-gray-800 dark:text-gray-200 border border-transparent transition-all hover:scale-105 backdrop-blur-lg bg-opacity-10"
          >
            Get in touch
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
