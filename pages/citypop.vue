<template>
  <div
    class="
      w-full
      max-w-screen-xl max-w-screen-xl
      px-6
      mx-auto
      grid grid-cols-3 grid-flow-col
      pt-12
      gap-8
    "
  >
    <div class="rounded col-span-1">
      <div class="items-center justify-between w-full">
        <div class="w-full items-start lg:items-center rounded bg-white shadow">
          <div class="w-full lg:w-1/3 h-24 lg:h-64"></div>
        </div>
      </div>
    </div>
    <div class="rounded col-span-2">
      <div class="items-center justify-between w-full">
        <div class="w-full items-start lg:items-center rounded bg-white shadow">
          <img
            class="w-full h-full overflow-hidden object-cover rounded"
            src="/img/citypop_mood-min.png"
            alt="Daniel profile image"
          />
        </div>
      </div>
    </div>

    <div class="rounded col-span-2">
      <div class="items-center justify-between w-full">
        <div
          class="items-start lg:items-center rounded bg-white shadow rotate-90"
        >
          <div class="w-full lg:w-1/3 text-9xl font-bold text-cyan-300">
            DANIEL
          </div>
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
