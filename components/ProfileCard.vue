<script setup>
import { onMounted, ref } from "vue";
const { $gsap } = useNuxtApp();

const profileCard = ref(null);
const profileImage = ref(null);

onMounted(() => {
  if (!$gsap || !profileCard.value) return;

  $gsap.fromTo(
    profileCard.value,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );

  if (!profileImage.value) return;
  profileCard.value.addEventListener("mousemove", (e) => {
    const { width, height, left, top } =
      profileCard.value.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 30;
    const y = (e.clientY - top - height / 2) / 30;

    $gsap.to(profileImage.value, {
      x,
      y,
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
  <div ref="profileCard" class="w-full max-w-screen-xl mx-auto">
    <div class="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
      <div class="glass-panel rounded-3xl overflow-hidden lift-hover">
        <div class="relative">
          <img
            class="h-64 w-full object-cover"
            src="/img/citypop_mood-min.png"
            alt="Cover"
          />
          <div class="absolute left-8 bottom-0 translate-y-1/2">
            <img
              ref="profileImage"
              class="w-24 h-24 rounded-2xl border-4 border-white shadow-lg dark:border-gray-900"
              src="/img/citypop_Dan4-min.png"
              alt="Daniel profile image"
            />
          </div>
        </div>

        <div class="px-8 pt-16 pb-10">
          <p class="text-xs uppercase tracking-[0.3em] text-muted">
            Product + UX
          </p>
          <h2 class="text-3xl md:text-4xl font-black mt-3">
            Daniel Yarza Navarro
          </h2>
          <p class="mt-4 text-lg text-muted leading-relaxed">
            UX advocate and product partner shaping B2C experiences in Zurich.
            I love bridging business, design, and engineering to ship calm,
            human-centered products.
          </p>

          <div class="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted">
            <span class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
              Research + Strategy
            </span>
            <span class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
              Product Ops
            </span>
            <span class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
              Prototyping
            </span>
            <span class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
              WebXR Curiosity
            </span>
          </div>

          <a
            class="inline-flex mt-8 items-center justify-center rounded-full bg-accent-1 text-white px-6 py-3 text-xs uppercase tracking-[0.3em] shadow-glow-blue lift-hover"
            href="mailto:danielyarza1@gmail.com?subject=Let's%20connect!"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div class="grid gap-6">
        <div class="glass-subtle rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.3em] text-muted">Now</p>
          <h3 class="text-2xl font-bold mt-3">Current focus</h3>
          <ul class="mt-4 space-y-3 text-muted">
            <li>Building composable design systems for rapid e-commerce UX.</li>
            <li>Exploring AI-assisted discovery flows without losing trust.</li>
            <li>Experimenting with immersive WebXR storytelling.</li>
          </ul>
        </div>

        <div class="glass-subtle rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.3em] text-muted">Signature</p>
          <h3 class="text-2xl font-bold mt-3">How I work</h3>
          <p class="mt-4 text-muted leading-relaxed">
            I run lean discovery sprints, map friction fast, and prototype with
            devs in the loop. The goal is always clear: ship experiences that
            feel inevitable.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
