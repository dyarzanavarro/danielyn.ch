<template>
  <div
    class="min-h-screen bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
  >
    <!-- Page Heading -->
    <div class="pt-6 lg:pt-8 max-w-screen-xl mx-auto px-4">
      <div class="justify-center w-full px-4 pt-32 text-center">
        <h1
          class="bg-clip-text text-transparent bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-5xl lg:text-7xl font-bold"
        >
          Fun is subjective
        </h1>
        <p
          class="mt-4 text-gray-800 dark:text-gray-400 text-lg lg:text-2xl max-w-2xl mx-auto"
        >
          Life’s not all about sprints, standups, and story points. I make it a
          priority to stay creative, stay curious, and stay connected. Here's a
          glimpse at how I recharge, explore, and experiment outside of the
          professional sphere.
        </p>
      </div>

      <!-- Section: Boardgames -->
      <div class="justify-center w-full pt-12">
        <div
          class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
        >
          Boardgames & Analog Fun
        </div>
        <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
          Whether it's the chaos of Betrayal at House on the Hill or the
          storytelling of DnD, boardgames are a go-to for connection and
          challenge. I’ve even prototyped & ran a few of my own — play-tested
          with friends, fueled by snacks.
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Boardgame.jpg"
            alt="Boardgame moment"
          />
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Boardgame1.jpg"
            alt="Boardgame moment"
          />
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Boardgame3.jpg"
            alt="Boardgame moment"
          />
        </div>
      </div>

      <!-- Section: Loved Ones -->
      <div class="justify-center w-full pt-12">
        <div
          class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
        >
          Time Well Spent
        </div>
        <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
          My wife and our high-energy sidekick Boo (a fetch-obsessed Ratonero
          Andaluz) make life better daily. Whether we’re hiking, chilling, or
          cooking together, they’re the heartbeat of my off-screen time.
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Boo1.jpg"
            alt="Vanessa and Boo"
          />
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Boo2.jpg"
            alt="Daniel with Boo"
          />
        </div>
      </div>

      <!-- Section: Reading -->
      <div class="justify-center w-full pt-12">
        <div
          class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
        >
          Books, Worlds, and Ideas
        </div>
        <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
          Reading keeps me sharp. My Kindle’s loaded with sci-fi and fantasy,
          with the occasional UX or psychology deep-dive to keep my inner
          researcher happy. Bonus points for a good world map at the start of a
          book.
        </div>
      </div>

      <!-- Section: Game Design -->
      <div class="justify-center w-full pt-12">
        <div
          class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
        >
          Game Design Experiments
        </div>
        <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
          I’ve explored Unity and XR in my free time — often spinning up small,
          weird prototypes for the sake of curiosity. One of them turned into a
          little browser game that lives
          <a
            href="/adventure"
            class="underline font-semibold hover:text-indigo-500"
            >here</a
          >.
        </div>
      </div>

      <!-- Section: Travel -->
      <div class="justify-center w-full pt-12">
        <div
          class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
        >
          Wanderlust Mode
        </div>
        <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
          I've visited 30+ countries — from wreck diving to close and personal
          with wallabies. Travel is how I reset, get inspired, and remember how
          big (and beautifully weird) the world really is.
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Travel1.jpg"
            alt="Travel shot"
          />
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Travel2.jpg"
            alt="Travel shot"
          />
          <img
            class="h-64 w-full object-cover rounded-xl shadow"
            src="/img/Travel3.jpg"
            alt="Travel shot"
          />
        </div>
      </div>

      <!-- Section: Cooking -->
      <div class="justify-center w-full pt-12 pb-20">
        <div
          class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
        >
          In the Kitchen
        </div>
        <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
          Cooking is how I unwind — part creative expression, part science
          experiment. I’ve been known to over-engineer poke bowls and host vegan
          dinner dates. (No regrets.)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "interest",
  props: ["title"],
  data() {
    return {
      description:
        "A collection of personal interests, creative experiments, and ways I unwind.",
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: "description", name: "description", content: this.description },
      ],
    };
  },
};
</script>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
