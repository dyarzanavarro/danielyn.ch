<template>
  <div class="">
    <div
      class="
        mx-12
        grid
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-6
        gap-6
        max-h-5/6
        overflow-hidden
        object-cover
      "
    >
      <div class="rounded bg-pink-600 max-h-fit"></div>
      <div class="rounded col-span-4 max-h-fit">
        <img
          class="w-full h-full overflow-hidden object-cover rounded"
          src="/img/citypop_mood-min.png"
          alt="Daniel profile image"
        />
      </div>
      <div class="rounded col-span-1 max-h-fit">
        <div class="rotate-90 mt-32">
          <div class="text-9xl font-bold text-cyan-300">DANIEL</div>
        </div>
      </div>
    </div>
    <AudioPlayer />
  </div>
</template>

<script setup>
definePageMeta({});
</script>
