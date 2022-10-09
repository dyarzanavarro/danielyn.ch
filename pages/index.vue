<template>
  <div>
    <div
      class="
        grid
        max-w-screen-xl
        px-4
        py-2
        mx-auto
        lg:gap-8
        xl:gap-0
        lg:grid-cols-12
      "
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="
            max-w-2xl
            mb-4
            text-4xl
            font-bold
            lg:text-7xl
            tracking-tight
            leading-none
            md:text-5xl
            xl:text-6xl
            text-gray-600
            dark:text-gray-200
          "
        >
          Daniel is a UX Engineer working in B2C E-commerce in 🇨🇭
        </h1>
        <p
          class="
            max-w-2xl
            mb-6
            font-light
            lg:mb-8
            md:text-xl
            lg:text-2xl
            text-gray-800
            dark:text-gray-400
          "
        >
          Dipping my toes in SCRUM product ownership & creating intuitive user
          journeys that drive up value and supports long-term growth. Get to
          know me better by browsing my past work, what I do for fun or learn
          about the process I use to improve any business.
        </p>
        <nuxt-link
          class="
            inline-flex
            items-center
            justify-center
            px-5
            py-2
            mr-3
            text-base
            border border-gray-600
            font-medium
            text-center
            dark:text-white
            rounded-lg
            bg-primary-700
            hover:bg-primary-800
            focus:ring-4 focus:ring-primary-300
            text-gray-800
            hover:animate-pulse
          "
          to="/process"
        >
          Learn more about me
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex pt-12 relative z-100">
        <img
          class="motion-safe:animate-bounce w-12/12"
          src="/img/floating_robot.svg"
          alt="floating robot"
        />
      </div>
    </div>

    <div class="justify-center max-w-screen-xl px-4 py-8 mx-auto pt-6">
      <div class="font-bold text-gray-600 lg:text-3xl text-2xl">
        Selected work
      </div>
      <work-cards />
    </div>

    <div class="justify-center max-w-screen-xl px-4 py-8 mx-auto pt-12">
      <div class="font-bold text-gray-600 lg:text-3xl text-2xl">
        Profile & Contact
      </div>
      <div class="bg-slate-100 inset-x-0 bottom-0">
        <profile-card />
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style>
</style>