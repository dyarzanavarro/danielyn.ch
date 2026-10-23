<script setup>
const props = defineProps({ error: Object });
const notFound = props.error?.statusCode === 404;
</script>

<template>
  <NuxtLayout>
    <div class="min-h-[60vh] px-4 sm:px-6 pt-14 sm:pt-20 pb-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="card p-8 sm:p-10 grid gap-5">
          <p class="eyebrow">{{ error?.statusCode || "Error" }}</p>
          <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
            {{ notFound ? "Looks like this page drifted off the map." : "Something went wrong." }}
          </h1>
          <p class="text-lg text-muted">
            {{ notFound ? "The page you are looking for does not exist or was moved." : "Please try again in a moment." }}
          </p>
          <button type="button" class="btn btn-primary w-fit" @click="clearError({ redirect: '/' })">Back home</button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
