<template>
  <div class="relative min-h-screen">
    <section
      ref="heroSection"
      class="snap-section relative overflow-hidden pt-10 sm:pt-24 lg:pt-14 pb-16 px-6"
    >
      <HeroBackground />
      <div class="max-w-screen-xl mx-auto relative z-10">
        <div class="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center min-w-0">
          <div class="min-w-0 w-full">
            <TextReveal>
              <p class="text-xs uppercase tracking-[0.4em] text-muted mb-6">
                Product + UX - Zurich
              </p>
            </TextReveal>
            <TextReveal :delay="0.1">
              <h1
                class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-ink max-w-3xl break-words"
              >
                I craft calm, conversion-ready experiences for modern
                e-commerce. Human, fast, and a little unexpected.
              </h1>
            </TextReveal>
            <TextReveal :delay="0.2">
              <p class="mt-6 text-lg text-muted max-w-2xl">
                I work at the intersection of product strategy, UX, and
                engineering to ship experiences that feel inevitable -- clear
                flows, modular systems, and intentional motion.
              </p>
            </TextReveal>

            <div class="mt-8 flex flex-wrap gap-4">
              <nuxt-link
                ref="primaryCta"
                class="inline-flex items-center justify-center rounded-full bg-accent-1 text-white px-6 py-3 text-xs uppercase tracking-[0.3em] shadow-glow-blue lift-hover"
                to="/work"
                data-magnetic
              >
                View case studies
              </nuxt-link>
              <nuxt-link
                class="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-muted hover:text-ink transition"
                to="/process"
              >
                How I work
              </nuxt-link>
            </div>

            <div class="mt-12 marquee">
              <div class="marquee-track text-sm uppercase tracking-[0.3em] text-muted">
                <span class="mr-10">Design systems</span>
                <span class="mr-10">Product discovery</span>
                <span class="mr-10">Growth experiments</span>
                <span class="mr-10">Rapid prototyping</span>
                <span class="mr-10">WebXR explorations</span>
                <span class="mr-10">Service design</span>
                <span class="mr-10">Design systems</span>
                <span class="mr-10">Product discovery</span>
                <span class="mr-10">Growth experiments</span>
                <span class="mr-10">Rapid prototyping</span>
                <span class="mr-10">WebXR explorations</span>
                <span class="mr-10">Service design</span>
              </div>
            </div>
          </div>

          <div class="grid gap-6 min-w-0 w-full">
            <div class="glass-panel rounded-3xl p-6 lift-hover max-w-full">
              <p class="text-xs uppercase tracking-[0.3em] text-muted">
                What I bring
              </p>
              <h2 class="text-2xl font-bold mt-4">
                Systems-first product design
              </h2>
              <p class="mt-4 text-muted">
                I build reusable patterns, design ops rituals, and lean delivery
                loops so teams can ship faster without losing quality.
              </p>
              <div class="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                <span class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                  UX Strategy
                </span>
                <span class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                  Roadmapping
                </span>
                <span class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                  UX Ops
                </span>
              </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 min-w-0">
              <div class="glass-subtle rounded-3xl p-6 lift-hover max-w-full">
                <p class="text-xs uppercase tracking-[0.3em] text-muted">
                  Industries
                </p>
                <p class="mt-4 text-lg font-semibold">E-commerce, SaaS</p>
                <p class="mt-2 text-sm text-muted">
                  From telecom to niche collectives and consumer products.
                </p>
              </div>
              <div class="glass-subtle rounded-3xl p-6 lift-hover max-w-full">
                <p class="text-xs uppercase tracking-[0.3em] text-muted">
                  Approach
                </p>
                <p class="mt-4 text-lg font-semibold">Lean + Craft</p>
                <p class="mt-2 text-sm text-muted">
                  Quick iterations with purposeful polish and accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section ref="workSection" class="snap-section relative px-6 pb-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-muted">
              Selected work
            </p>
            <h2 class="text-3xl sm:text-4xl font-black mt-3">
              Case studies that show range
            </h2>
          </div>
          <nuxt-link
            class="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-muted hover:text-ink transition"
            to="/work"
          >
            See all work
          </nuxt-link>
        </div>
        <work-cards />
      </div>
    </section>

    <section ref="profileSection" class="snap-section relative px-6 pb-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="mb-12">
          <p class="text-xs uppercase tracking-[0.4em] text-muted">
            Profile
          </p>
          <h2 class="text-3xl sm:text-4xl font-black mt-3">
            Meet the maker
          </h2>
        </div>
        <profile-card />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";

const { $gsap } = useNuxtApp();

const heroSection = ref(null);
const workSection = ref(null);
const profileSection = ref(null);
const primaryCta = ref(null);

onMounted(async () => {
  await nextTick();

  if (process.client && $gsap) {
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    $gsap.registerPlugin(ScrollTrigger);

    $gsap.fromTo(
      heroSection.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    [workSection.value, profileSection.value].forEach((section) => {
      if (!section) return;
      $gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (primaryCta.value) {
      primaryCta.value.addEventListener("mousemove", (e) => {
        const rect = primaryCta.value.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        $gsap.to(primaryCta.value, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      primaryCta.value.addEventListener("mouseleave", () => {
        $gsap.to(primaryCta.value, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    }
  }
});
</script>
