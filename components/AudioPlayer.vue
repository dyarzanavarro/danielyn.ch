<template>
  <div
    class="
      flex
      justify-center
      items-center
      inset-x-0
      fixed
      bottom-2
      ml-12
      mr-12
      z-10
    "
  >
    <div class="bg-white shadow-lg rounded-lg lg:w-3/12 w-96">
      <div style="left: 0; width: 100%; height: 80px; position: relative">
        <iframe
          src="https://open.spotify.com/embed/playlist/4NUnY7CsxWdo4ROx3gI1Af?utm_source=oembed"
          style="
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            border: 0;
          "
          allowfullscreen
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {};
  },
  /* 
  methods: {
    play() {
      this.activeAudio.isPlaying = true;
      this.activeAudio.file.play();
      this.activeAudio.loop = true;
    },

    pause() {
      this.activeAudio.isPlaying = false;
      this.activeAudio.file.pause();
    },

    toggle() {
      //needs to be set to something, like first entry of array
      this.activeAudio = this.audios[0];
      this.activeAudio.isPlaying ? this.pause() : this.play();
    },
  }, */
};
</script>
<style>
</style>

