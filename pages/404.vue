<template>
  <body class="overflow-hidden bg-slate-100 h-max dark:bg-slate-900">
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
        <h1
          class="
            py-4
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
          "
        >
          Looks like you've found the doorway to the great nothing
        </h1>
        <p
          class="
            py-4
            text-base
            md:text-xl
            lg:text-2xl
            text-gray-800
            dark:text-gray-400
          "
        >
          The content you’re looking for doesn’t exist. Either it was removed,
          or you something mysterious happend.
        </p>
        <p
          class="
            py-2
            text-base
            md:text-xl
            lg:text-2xl
            text-gray-800
            dark:text-gray-400
          "
        >
          Sorry about that! Please visit home to get where you need to go.
        </p>
        <nuxt-link
          class="relative inline-flex mt-6 group"
          to="/alternativeLanding"
        >
          <div
            class="
              absolute
              transition-all
              duration-1000
              opacity-30
              inset-0
              bg-gradient-to-r
              from-[#44BCFF]
              via-[#FF44EC]
              to-[#FF675E]
              rounded-xl
              blur-lg
              filter
              group-hover:opacity-100 group-hover:duration-300
            "
          ></div>
          <div
            class="
              inline-flex
              items-center
              justify-center
              mr-3
              text-base
              font-medium
              text-center
              rounded-lg
              bg-primary-700
              focus:ring-4 focus:ring-primary-300
              text-gray-800
              shadow-xl
              border border-transparent
              rounded-lg
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-600
              dark:text-gray-200
            "
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