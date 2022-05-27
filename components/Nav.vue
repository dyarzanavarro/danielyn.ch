<template>
  <nav class="2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
    <!-- For large and Medium-sized Screen -->
    <div class="flex justify-between">
      <div class="hidden sm:flex flex-row items-center space-x-6">
        <nuxt-link
          to="/"
          href="#"
          class="
            text-lg
            uppercase
            font-semibold
            tracking-widest
            text-gray-900
            rounded-lg
            dark-mode:text-white
            focus:outline-none focus:shadow-outline
          "
        >
          dyn
        </nuxt-link>
      </div>

      <div class="hidden sm:flex flex-row space-x-4">
        <nuxt-link to="/work"
          ><div
            class="
              px-4
              py-2
              mt-2
              text-lg
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
          >
            work
          </div></nuxt-link
        >
        <nuxt-link to="/process"
          ><div
            class="
              px-4
              py-2
              mt-2
              text-lg
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
          >
            process
          </div></nuxt-link
        >
        <nuxt-link to="/fun"
          ><div
            class="
              px-4
              py-2
              mt-2
              text-lg
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
          >
            fun
          </div></nuxt-link
        >
      </div>

      <!-- Burger Icon -->
      <div
        id="bgIcon"
        @click="toggleMenu()"
        class="
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-gray-800
          flex
          justify-center
          items-center
          sm:hidden
          cursor-pointer
          absolute
          right-0
          top-0
          p-6
        "
      >
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg"
          alt="burger"
        />
        <img
          class="hidden"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg"
          alt="cross"
        />
      </div>
    </div>

    <div class="sm:hidden flex flex-row items-center space-x-6">
      <nuxt-link
        to="/"
        href="#"
        class="
          text-lg
          font-semibold
          tracking-widest
          text-gray-900
          rounded-lg
          dark-mode:text-white
          focus:outline-none focus:shadow-outline
          px-6
        "
      >
        dyn
      </nuxt-link>
    </div>
    <!-- Mobile and small-screen devices (toggle Menu) -->
    <div id="MobileNavigation" class="hidden sm:hidden mt-4 mx-auto">
      <div class="flex flex-row items-center justify-center space-x-6">
        <nuxt-link to="/work"
          ><div
            class="
              px-4
              py-2
              mt-2
              text-lg
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
          >
            work
          </div></nuxt-link
        >
        <nuxt-link to="/process"
          ><div
            class="
              px-4
              py-2
              mt-2
              text-lg
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
          >
            process
          </div></nuxt-link
        >
        <nuxt-link to="/fun"
          ><div
            class="
              px-4
              py-2
              mt-2
              text-lg
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
          >
            fun
          </div></nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      var icon = document.getElementById("bgIcon");
      const childEle = icon.children;

      childEle[0].classList.toggle("hidden");
      childEle[1].classList.toggle("hidden");

      var mobileNav = document
        .getElementById("MobileNavigation")
        .classList.toggle("hidden");
    },
  },
};
</script>

<style>
</style>