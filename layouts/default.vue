<template>
  <div class="bg-slate-100">
    <Nav />
    <slot />
    <div
      class="
        flex
        items-end
        justify-end
        fixed
        bottom-0
        right-0
        mb-4
        mr-4
        z-10
        opacity-40
        hover:opacity-100
      "
    >
      <div>
        <nuxt-link
          to="/citypop"
          title="City Pop Mode"
          class="
            block
            w-16
            h-16
            rounded-full
            transition-all
            shadow
            hover:shadow-lg
            transform
            hover:scale-110 hover:rotate-12
            bg-pink-600
            mx-auto
          "
        >
          <div class="text-zinc-50 text-2xl text-center pt-3">使</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
