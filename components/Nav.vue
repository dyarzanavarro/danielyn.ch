<template>
  <div class="2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
    <!-- For large and Medium-sized Screen -->
    <div class="flex justify-between">
      <div class="hidden sm:flex flex-row items-center space-x-6">
        <nuxt-link
          to="/"
          class="
            text-4xl
            uppercase
            font-semibold
            tracking-widest
            text-gray-900
            rounded-lg
            dark-mode:text-white
            hover:text-indigo-700
            focus:outline-none focus:shadow-outline
            pl-4
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
              text-4xl
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
              hover:text-indigo-700
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
              text-4xl
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
              hover:text-indigo-700
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
              text-4xl
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
              hover:text-indigo-700
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
        class="
          text-4xl
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
    <div
      id="MobileNavigation"
      class="hidden sm:hidden mt-4 mx-auto fixed overscroll-none"
    >
      <div
        class="
          top-16
          left-0
          w-screen
          h-screen
          overflow-hidden
          overscroll-none
          bg-slate-100
          text-center
        "
      >
        <ul class="list-none">
          <li>
            <nuxt-link to="/work" @click="toggleMenu"
              ><div
                class="
                  px-6
                  py-12
                  text-4xl
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
                  text-indigo-700
                  navItem
                "
              >
                work
              </div></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/process" @click="toggleMenu"
              ><div
                class="
                  px-6
                  py-12
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
                  text-indigo-700
                  navItem
                "
              >
                process
              </div></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/fun" @click="toggleMenu"
              ><div
                class="
                  px-6
                  py-12
                  text-4xl
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
                  text-indigo-700
                  navItem
                "
              >
                fun
              </div></nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
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
.navItem {
  font-size: 4rem;
}
</style>