<script setup>
defineProps({
  shot: { type: Object, required: true },
  eager: { type: Boolean, default: false },
});
</script>

<template>
  <figure class="rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-black/10 dark:ring-white/10">
    <img
      :src="shot.src"
      :alt="shot.alt"
      :width="shot.width"
      :height="shot.height"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
      class="block w-full h-auto"
    />
  </figure>
</template>
