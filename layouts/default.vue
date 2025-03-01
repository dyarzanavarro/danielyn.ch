<template>
  <div class="bg-slate-100 h-max dark:bg-slate-900">
    <Nav />
    <slot class />
    <Footer />
  </div>
</template>
<script>
</script>

<style >
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
const colorMode = useColorMode();
</script>