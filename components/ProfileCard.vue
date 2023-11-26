<template>
  <div class="pt-6 w-full max-w-screen-xl max-w-screen-xl dark:bg-slate-900">
    <!-- Card code block start -->
    <div class="bg-stone-100 dark:bg-gray-800 shadow rounded">
      <div class="relative bg-slate-100 dark:bg-gray-800">
        <img
          class="h-56 shadow rounded-xl w-full object-cover object-center"
          src="/img/citypop_mood-min.png"
          alt=""
        />
        <div
          class="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow-xl rounded-xl border-white"
        >
          <img
            class="w-full h-full overflow-hidden object-cover rounded"
            src="/img/citypop_Dan4-min.png"
            alt="Daniel profile image"
          />
        </div>
      </div>
      <div class="px-5 xl:px-10 pb-10">
        <div
          class="flex justify-center xl:justify-end w-full pt-16 xl:pt-10"
        ></div>
        <div
          class="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between"
        >
          <div class="xl:pr-16 w-full xl:w-2/3">
            <div
              class="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start"
            >
              <h2
                class="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal"
              >
                Daniel Yarza Navarro
              </h2>
              <div
                class="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
              >
                Excited
              </div>
            </div>
            <p
              class="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-700 dark:text-gray-200 dark:text-gray-400 leading-5"
            >
              Passionate problem solver in a digital environment - always open
              to talk shop or brainstorm new ideas! PS: mention WebXR and I will
              talk your ear full for at least an hour
            </p>
          </div>
          <div
            class="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3"
          >
          <WeatherCard/>
             </div>
          <div
            class="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3"
          >
            <div class="mr-6 xl:mr-10">
              <a
                :href="`mailto:'danielyarza1@gmail.com?subject=I found your website and I'd love to get to know you better!`"
              >
                <img
                  v-if="$colorMode.value == 'dark'"
                  class="h-10 object-bottom hover:animate-pulse cursor-pointer leading-6 mb-2 text-center mx-auto"
                  src="/img/chat-bubble-front-clay.svg"
                  alt="floating robot"
                />
                <img
                  v-else
                  class="h-10 object-bottom hover:animate-pulse cursor-pointer leading-6 mb-2 text-center mx-auto"
                  src="/img/chat-bubble-front-color.svg"
                  alt="floating robot"
                />
              </a>
              <p class="text-gray-800 dark:text-gray-100 text-sm xl:text-xl">
                Give me a shout!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Card code block end -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style>
</style>