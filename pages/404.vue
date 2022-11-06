<template>
  <body class="overflow-hidden">
    <div
      class="
        flex
        items-center
        flex-col
        justify-center
        lg:flex-row
        py-28
        px-6
        md:px-24 md:py-20
        lg:py-32
        gap-16
        lg:gap-28
      "
    >
      <div class="w-full lg:w-1/2">
        <img
          class="hidden lg:block"
          src="https://i.ibb.co/v30JLYr/Group-192-2.png"
        />
        <img
          class="hidden md:block lg:hidden"
          src="https://i.ibb.co/c1ggfn2/Group-193.png"
        />
        <img class="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
      </div>
      <div class="w-full lg:w-1/2">
        <h1 class="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p class="py-4 text-base text-gray-800">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you something mysterious happend.
        </p>
        <p class="py-2 text-base text-gray-800">
          Sorry about that! Please visit home to get where you need to go.
        </p>
        <nuxt-link to="/">
          <div
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
              shadow-xl
              hover:animate-pulse
            "
            to="/process"
          >
            Go back!
          </div>
        </nuxt-link>
      </div>
    </div>
  </body>
</template>


<script>
export default {};
</script>

<style>
</style>