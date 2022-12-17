<template>
  <div>
    <div
      class="
        mx-6
        grid
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-6
        h-4/5
        overflow-hidden
      "
    >
      <nuxt-picture
        src="/img/design_citypop.svg"
        :imgAttrs="{
          id: 'citypop design',
          class: 'rounded col-span-1 h-screen object-cover object-center',
          loading: 'lazy',
        }"
      />

      <div class="rounded lg:col-span-4 col-span-2">
        <Transition name="fade" mode="out-in" false>
          <div>
            <nuxt-picture
              :src="imgLoad[0]"
              :imgAttrs="{
                id: 'citypop design',
                class: 'w-full h-screen object-cover object-center rounded',
                loading: 'lazy',
              }"
            /></div
        ></Transition>
      </div>
      <div class="rounded col-span-1">
        <div class="-rotate-90 mt-96 ml-3">
          <div class="text-9xl font-bold text-cyan-400">DANIEL</div>
        </div>
      </div>
    </div>
    <AudioPlayer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgLoad: [
        "/citypop_mood-min.png",
        "/citypop_Dan1-min.png",
        "/citypop_Dan3-min.png",
        "/citypop_Dan4-min.png",
        "/citypop_Dan5-min.png",
        "/citypop_Dan6-min.png",
      ],
    };
  },

  mounted() {
    window.setInterval(() => {
      this.changeImg();
    }, 8000);
  },
  methods: {
    changeImg() {
      const first = this.imgLoad.shift();
      this.imgLoad = this.imgLoad.concat(first);
    },
  },
};
</script>

