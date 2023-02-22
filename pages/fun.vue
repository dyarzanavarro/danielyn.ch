<template>
  <div class="justify-center w-full max-w-screen-xl px-6 mx-auto">
    <div class="justify-center w-full px-4 pt-12">
      <div
        class="
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-[#44BCFF]
          via-[#FF44EC]
          to-[#FF675E]
          max-w-2xl
          mb-4
          text-4xl
          font-bold
          lg:text-7xl
          tracking-wide
          md:text-5xl
          xl:text-6xl
          py-4
        "
      >
        Fun is subjective
      </div>
    </div>
    <div class="container px-4 lg:pt-8 pt-6">
      <div class="text-gray-400 lg:text-2xl sm:text-4">
        Life can't be just about work. I like to spend my free time doing a
        bunch of different stuff. Learn more about my hobbies and interests.
      </div>
    </div>

    <section class="py-2 sm:py-8">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-2">
        <div
          class="
            grid grid-cols-1
            text-center
            sm:mt-16 sm:grid-cols-2 sm:gap-x-12
            gap-y-12
            md:grid-cols-3 md:gap-0
            xl:mt-4
          "
        >
          <div class="md:p-8 lg:p-14">
            <h3
              class="mt-12 text-2xl font-bold text-gray-700 dark:text-gray-200"
            >
              Boardgames
            </h3>
            <p class="mt-5 text-base text-gray-600 font-pj">
              Boardgames are a great way to spend time with friends and family.
              I love playing games like House on the Haunted Hill, Ticket to
              Ride, and Pandemic. I've also enjoyed creating my own games that
              I've played with friends.
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <h3
              class="mt-12 text-2xl font-bold text-gray-700 dark:text-gray-200"
            >
              Loved ones
            </h3>
            <p class="mt-5 text-base text-gray-600 font-pj">
              I spend most of my time with my wonderful partner Vanessa and cute
              dog Boo. He's a Ratonero Analuz, which means he'll play fletch
              until he dies. I'll pay the dog tax over here with cute images
            </p>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <h3
              class="mt-12 text-2xl font-bold text-gray-700 dark:text-gray-200"
            >
              Reading
            </h3>
            <p class="mt-5 text-base text-gray-600 font-pj">
              I switched to a Kindle a couple of years ago and won't go back I
              love devouring mostly science fiction and fantasy books. Now and
              again I pick up a psychology textbook to keep up to date with
              interesting topics!
            </p>
          </div>

          <a href="/village">
            <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200">
              <h3
                class="
                  mt-12
                  text-2xl
                  font-bold
                  text-gray-700
                  dark:text-gray-200
                "
              >
                Game Design
              </h3>
              <p class="mt-5 text-base text-gray-600 font-pj">
                I have a passion for the game industry and have used Unity in
                the past to spin up small games and prototypes. Additionally,
                I've been fascinated with XR these last few years.
              </p>
            </div>
          </a>

          <div
            class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t"
          >
            <h3
              class="mt-12 text-2xl font-bold text-gray-700 dark:text-gray-200"
            >
              Traveling
            </h3>
            <p class="mt-5 text-base text-gray-600 font-pj">
              I love traveling and have been to 30+ countries. I'm always
              looking for new places to visit and new experiences to have.
            </p>
          </div>

          <div
            class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t"
          >
            <h3
              class="mt-12 text-2xl font-bold text-gray-700 dark:text-gray-200"
            >
              Cooking
            </h3>
            <p class="mt-5 text-base text-gray-600 font-pj">
              Cooking is a passion of mine and I love trying new recipes and
              cuisines. I've been known to make some mean pasta and ramen bowls.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "interest",
  props: ["title"],
  data() {
    return {
      description: "A blog post about some stuff",
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