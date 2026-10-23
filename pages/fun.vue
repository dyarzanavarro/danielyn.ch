<script setup>
usePageSeo({
  title: "Off-screen: board games, travel and side experiments · Daniel Yarza Navarro",
  description:
    "What Daniel Yarza Navarro does away from sprints: board games and DnD, hiking and cooking with family, travel, and small Unity and XR prototypes.",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Off-screen", path: "/fun" },
  ],
});
</script>

<template>
  <div class="pt-14 sm:pt-20 pb-20 px-6">
    <div class="max-w-screen-xl mx-auto">
      <header class="snap-section max-w-3xl">
        <p class="eyebrow">Fun</p>
        <h1 class="text-4xl sm:text-5xl font-black mt-4">
          Fun is subjective, but curiosity is not.
        </h1>
        <p class="mt-6 text-lg text-muted">
          Life is not all about sprints and story points. These are the things
          that keep me sharp, grounded, and playful.
        </p>
      </header>

      <div class="mt-12 grid gap-8">
        <section class="snap-section glass-panel rounded-3xl p-8">
          <h2 class="text-2xl font-bold">Boardgames and analog joy</h2>
          <p class="mt-4 text-muted">
            I love the chaos of Betrayal at House on the Hill and the
            storytelling of DnD. I have even prototyped a few of my own games
            and tested them with friends.
          </p>
          <div class="mt-6 grid gap-6 md:grid-cols-3">
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/boardgame.webp" loading="lazy" decoding="async"
              alt="Boardgame moment"
            />
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/boardgame1.webp" loading="lazy" decoding="async"
              alt="Boardgame moment"
            />
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/boardgame3.webp" loading="lazy" decoding="async"
              alt="Boardgame moment"
            />
          </div>
        </section>

        <section class="snap-section glass-subtle rounded-3xl p-8">
          <h2 class="text-2xl font-bold">Time well spent</h2>
          <p class="mt-4 text-muted">
            My wife and our energetic sidekick Boo make life better daily.
            Hiking, cooking, and slow mornings are the heartbeat of my
            off-screen time.
          </p>
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/boo1.webp" loading="lazy" decoding="async"
              alt="Vanessa and Boo"
            />
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/boo2.webp" loading="lazy" decoding="async"
              alt="Daniel with Boo"
            />
          </div>
        </section>

        <section class="snap-section glass-panel rounded-3xl p-8">
          <h2 class="text-2xl font-bold">Books, worlds, and ideas</h2>
          <p class="mt-4 text-muted">
            Reading keeps me sharp. My Kindle is loaded with sci-fi, fantasy,
            and the occasional UX deep dive.
          </p>
        </section>

        <section class="snap-section glass-subtle rounded-3xl p-8">
          <h2 class="text-2xl font-bold">Game design experiments</h2>
          <p class="mt-4 text-muted">
            I explore Unity and XR in my free time, often spinning up small
            prototypes just to see what might be possible.
          </p>
        </section>

        <section class="snap-section glass-panel rounded-3xl p-8">
          <h2 class="text-2xl font-bold">Wanderlust mode</h2>
          <p class="mt-4 text-muted">
            Travel resets my perspective. From wreck diving to encounters with
            wallabies, it keeps me curious about how big the world really is.
          </p>
          <div class="mt-6 grid gap-6 md:grid-cols-3">
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/travel1.webp" loading="lazy" decoding="async"
              alt="Travel shot"
            />
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/travel2.webp" loading="lazy" decoding="async"
              alt="Travel shot"
            />
            <img
              class="h-56 w-full object-cover rounded-2xl"
              src="/img/life/travel3.webp" loading="lazy" decoding="async"
              alt="Travel shot"
            />
          </div>
        </section>

        <section class="snap-section glass-subtle rounded-3xl p-8">
          <h2 class="text-2xl font-bold">In the kitchen</h2>
          <p class="mt-4 text-muted">
            Cooking is how I unwind. It is part creative expression, part
            science experiment, and part hosting friends.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
