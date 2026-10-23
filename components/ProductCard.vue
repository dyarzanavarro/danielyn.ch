<script setup>
const props = defineProps({
  slug: { type: String, required: true },
  product: { type: Object, required: true },
  reverse: { type: Boolean, default: false },
});

const isMise = props.product.accent === "mise";
</script>

<template>
  <article
    class="card relative overflow-hidden p-6 sm:p-10 grid gap-10 lg:grid-cols-2 lg:items-center"
    :aria-labelledby="`product-${slug}`"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-70"
      :style="{
        background: isMise
          ? 'radial-gradient(60% 70% at 100% 0%, var(--mise-soft), transparent 70%)'
          : 'radial-gradient(60% 70% at 100% 0%, var(--shelfie-soft), transparent 70%)',
      }"
      aria-hidden="true"
    ></div>

    <div class="relative" :class="{ 'lg:order-2': reverse }">
      <div class="flex items-center gap-3">
        <img
          v-if="!isMise"
          src="/img/work/shelfie-icon.webp"
          alt=""
          width="48"
          height="48"
          class="w-12 h-12 rounded-xl"
        />
        <span
          v-else
          class="w-12 h-12 rounded-xl grid place-items-center on-accent font-black text-xl bg-mise"
          aria-hidden="true"
        >M</span>
        <div class="flex flex-wrap items-center gap-2">
          <span class="chip">
            <span
              class="mr-1.5 inline-block w-1.5 h-1.5 rounded-full"
              :class="isMise ? 'bg-emerald-500' : 'bg-shelfie'"
              aria-hidden="true"
            ></span>
            {{ product.status }}
          </span>
          <span class="chip">{{ isMise ? "Web app" : "Windows app" }}</span>
        </div>
      </div>

      <h3 :id="`product-${slug}`" class="mt-6 text-4xl sm:text-5xl font-black tracking-tight">
        {{ product.title }}
      </h3>
      <p class="mt-2 text-xl font-bold" :class="isMise ? 'text-mise' : 'text-shelfie'">
        {{ product.tagline }}
      </p>
      <p class="mt-4 text-muted text-lg leading-relaxed max-w-xl">{{ product.summary }}</p>

      <ul class="mt-6 grid gap-2.5">
        <li v-for="item in product.highlights" :key="item" class="flex gap-3">
          <svg class="mt-1 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" :class="isMise ? 'text-mise' : 'text-shelfie'" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap items-center gap-3">
        <a
          v-for="link in product.links.filter((l) => l.primary)"
          :key="link.href"
          :href="link.href"
          class="btn on-accent"
          :class="isMise ? 'bg-mise' : 'bg-shelfie'"
        >
          <svg v-if="link.download" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" /></svg>
          {{ link.label }}
        </a>
        <NuxtLink :to="`/projects/${slug}`" class="btn btn-ghost">
          {{ isMise ? "Case study" : "Details & install" }}
        </NuxtLink>
      </div>
      <p v-if="!isMise" class="mt-3 text-sm text-muted">
        Free · Windows 10/11 · Not code-signed yet:
        <NuxtLink :to="`/projects/${slug}#install`" class="underline underline-offset-2 hover:text-ink">how to install</NuxtLink>
      </p>
      <p v-else class="mt-3 text-sm text-muted">Free for your household · Works on any phone</p>
    </div>

    <div class="relative" :class="{ 'lg:order-1': reverse }">
      <MisePlannerMock v-if="isMise" />
      <ShelfieLibraryMock v-else />
    </div>
  </article>
</template>
