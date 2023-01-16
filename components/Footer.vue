<template>
  <div class="pb-6">
    <div
      class="
        mx-auto
        container
        lg:pt-12
        pt-12
        flex flex-col
        items-center
        justify-center
      "
    >
      <div>
        <nuxt-link
          to="/"
          class="
            text-lg
            font-semibold
            tracking-widest
            text-gray-900
            rounded-lg
            uppercase
            dark:text-white
            focus:outline-none focus:shadow-outline
          "
        >
          dyn
        </nuxt-link>
      </div>
      <div class="flex flex-col md:items-center f-f-l pt-3">
        <h1
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
            leading-none
            tracking-wide
            md:text-5xl
            xl:text-6xl
            py-4
          "
        >
          Let's. build. it.
        </h1>

        <div class="my-6 text-base text-color f-f-l"></div>
        <div class="text-sm text-color mb-10 f-f-l dark:text-gray-200">
          <p>© {{ year }} - Made with ❤️</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>