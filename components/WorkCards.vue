<template>
  <div class="pt-12">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        v-for="project in projects"
        :key="project.id"
        :style="`background-color: none; color: none`"
      >
        <nuxt-link :to="project.link">
          <div
            class="max-w-sm bg-stone-100 dark:bg-gray-700 dark:hover:shadow dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-white shadow-xl rounded-xl hover:text-gray-900 focus:text-gray-900 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 mx-auto"
          >
            <img
              :src="project.imageUrl"
              :alt="project.imageAlt"
              class="w-full h-96 object-cover object-top rounded-xl"
            />
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <p
                    class="text-base leading-4 text-gray-500 dark:text-gray-200"
                  >
                    {{ project.date }}
                  </p>
                  <p
                    class="text-base leading-none text-gray-500 ml-12 dark:text-gray-200"
                  >
                    {{ project.readTime }}
                  </p>
                </div>
              </div>
              <h1
                class="text-2xl font-semibold leading-6 my-4 text-gray-800 dark:text-gray-100"
              >
                {{ project.title }}
              </h1>
              <p
                class="text-base leading-6 text-gray-700 dark:text-gray-200 mt-2 dark:text-gray-300"
              >
                {{ project.description }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      projects: [
        {
          id: "Preppal",
          link: "projects/preppal",
          imageUrl: "/img/preppal6-min.png",
          imageAlt: "Intro image for project Preppal",
          date: "28 dec",
          readTime: "10 min read",
          title:
            "Preppal - Manage your recipes, plan your weekly meals & shop smarter",
          description:
            "Web-app to manage recipes, mealprep and manage your shared shopping list. Built with Nuxt, Auth, Tailwind and Firebase.",
        },

        {
          id: "yallo",
          link: "projects/yallo",
          imageUrl: "/img/yol_1-min.png",
          imageAlt: "Intro image for project yallo",
          date: "22 may",
          readTime: "10 min read",
          title: "yallo - Upgrading a brand to a new level",
          description:
            "Full migration of Legacy System, from moving to a new Design System to replatforming on new tech stack.",
        },
        {
          id: "kollektivkitzeln",
          link: "projects/kollektivkitzeln",
          imageUrl: "/img/kollektiv1.png",
          imageAlt: "Intro image for project kollektivkitzeln",
          date: "24 nov",
          readTime: "3 min read",
          title: "Kollektiv Kitzeln - A home for a feminist collective",
          description:
            "I designed and developed a website for a feminist collective, including a calendar and a brand recognition section.",
        },
        {
          id: "hundeschule-oberthaler",
          link: "projects/hundeschule",
          imageUrl: "/img/hundeschule1.png",
          imageAlt: "Intro image for project Hundeschule Oberthaler",
          date: "01 jul",
          readTime: "5 min read",
          title: "Hundeschule Oberthaler - A dog training school",
          description:
            "I designed and developed a website for a dog training school, with a focus on the specific qualities of the owner, a way to contact & a breakdown of services.",
        },
        {
          id: "Sunrise",
          link: "projects/sunrise",
          imageUrl: "/img/sunrise_1-min.png",
          imageAlt: "Intro image for project Sunrise eShop",
          date: "14 oct",
          readTime: "5 min read",
          title: "Sunrise eShop - Selling digital products",
          description:
            " Setting up a an A/B Testing pipeline (Target), designing and developing ad-hoc for Sales related projects. Close interaction with the eCommerce Team in Design Thinking Workshops and qualitative User Research.",
        },
        {
          id: "portfolio",
          link: "projects/portfolio",
          imageUrl: "/img/citypop_Dan3-min.png",
          imageAlt: "Intro image for project Portfolio",
          date: "04 mar",
          readTime: "8 min read",
          title: "Showcase - Time for Nuxt3 and Tailwind",
          description:
            "In order to keep up to date with modern frameworks I built this page as a playground to showcase experiments and ideas",
        },
        {
          id: "psych",
          link: "projects/psych",
          imageUrl: "/img/psych_isometric-min.png",
          imageAlt: "Intro image for project psych",
          date: "12 jan",
          readTime: "5 min read",
          title: "Psychology Hub Redesign & Enhancement",
          description:
            "Delivering a overhauled design, implemented a robust backend and content management system tailored for psychology students org.",
        },
      ],
    };
  },
};
</script>

<style>
.swiper-3d .swiper-slide-shadow {
  background: none !important;
}
</style>