<template>
  <div
    class="
      w-full
      max-w-screen-xl max-w-screen-xl
      px-6
      mx-auto
      grid
      sm:grid-cols-3
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      pt-6
      gap-8
    "
  >
    <!-- Remove class [ h-24 ] when adding a card block -->
    <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->

    <!-- Remove class [ h-24 ] when adding a card block -->
    <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
    <div
      class="
        rounded
        border-gray-300
        dark:border-gray-700
        border-dashed border-2
      "
    >
      <div class="flex items-center justify-between w-full">
        <div
          class="
            flex flex-col
            lg:flex-row
            w-full
            items-start
            lg:items-center
            rounded
            bg-white
            shadow
          "
        >
          <div class="w-full lg:w-2/3 h-64 dark:bg-gray-800"></div>
          <div
            class="
              w-full
              lg:w-1/3
              h-24
              dark:border-gray-700
              lg:h-64
              border-t
              lg:border-t-0 lg:border-r lg:border-l lg:rounded-r
              dark:bg-gray-700
              bg-gray-100
            "
          ></div>
        </div>
      </div>
    </div>
    <div
      class="
        rounded
        border-gray-300
        dark:border-gray-700
        border-dashed border-2
      "
    >
      <div class="flex items-center justify-between w-full">
        <div
          class="
            flex flex-col
            lg:flex-row
            w-full
            items-start
            lg:items-center
            rounded
            bg-white
            shadow
          "
        >
          <div class="w-full lg:w-3/3 h-64 dark:bg-gray-800">
            <img
              class="w-full h-full overflow-hidden object-cover rounded"
              src="/img/citypop_mood-min.png"
              alt="Daniel profile image"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        rounded
        border-gray-300
        dark:border-gray-700
        border-dashed border-2
      "
    >
      <div class="flex items-center justify-between w-full">
        <div
          class="
            flex flex-col
            lg:flex-row
            w-full
            items-start
            lg:items-center
            rounded
            bg-white
            shadow
          "
        >
          <div class="w-full lg:w-2/3 h-64 dark:bg-gray-800"></div>
          <div
            class="
              w-full
              lg:w-1/3
              h-24
              dark:border-gray-700
              lg:h-64
              border-t
              lg:border-t-0 lg:border-r lg:border-l lg:rounded-r
              dark:bg-gray-700
              bg-gray-100
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
