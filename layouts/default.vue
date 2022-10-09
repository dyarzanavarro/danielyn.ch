<template>
  <div class="bg-slate-100 h-max dark:bg-slate-900">
    <Nav />
    <slot />
    <Footer />
  </div>
</template>
<script>
</script>

<style >
</style>

<script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
const colorMode = useColorMode();
</script>