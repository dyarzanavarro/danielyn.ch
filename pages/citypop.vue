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
        pt-16
        overflow-hidden
      "
    >
      <img
        class="rounded col-span-1 h-screen object-cover object-center"
        src="/img/design_citypop.svg"
      />

      <div class="rounded lg:col-span-4 col-span-2">
        <Transition name="fade" mode="out-in" false>
          <div>
            <img
              class="w-full h-screen object-cover object-center rounded"
              :src="imgLoad[0]"
              alt="Daniel profile image"
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
        "/img/citypop_mood-min.png",
        "/img/citypop_Dan1-min.png",
        "/img/citypop_Dan3-min.png",
        "/img/citypop_Dan4-min.png",
        "/img/citypop_Dan5-min.png",
        "/img/citypop_Dan6-min.png",
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

