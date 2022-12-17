<template>
  <div>
    <div class="h-screen" id="pixi" />
  </div>
</template>

<script>
import * as PIXI from "pixi.js";
export default {
  mounted: function () {
    const BASE_URL = this.$router.options.base;
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    document.getElementById("pixi").appendChild(app.view);
    //w = 37
    //h =46
    const titleScreen = new PIXI.Container();
    const titleText = new PIXI.Text("Welcome", {
      fontSize: 60,
      fill: 0xffffff,
    });
    titleScreen.addChild(titleText);
    titleText.x = app.view.width / 4;
    titleText.y = app.view.height / 4;

    app.stage.addChild(titleScreen);

    titleScreen.interactive = true;
    titleScreen.on("pointertap", startGame);

    function startGame() {
      // Remove the title screen and start the game
      app.stage.removeChild(titleScreen);
      // Start game logic here
      // Create a new texture
      const sprite = PIXI.Sprite.from("/img/pixiImages/background.png");
      const womanWalk = [
        "/img/pixiImages/woman-walk-1.png",
        "/img/pixiImages/woman-walk-2.png",
        "/img/pixiImages/woman-walk-3.png",
        "/img/pixiImages/woman-walk-4.png",
        "/img/pixiImages/woman-walk-5.png",
        "/img/pixiImages/woman-walk-6.png",
      ];
      const character = PIXI.AnimatedSprite.fromFrames(womanWalk);
      character.animationSpeed = 1 / 20; // 6 fps
      character.play();
      sprite.height = 1080;
      sprite.width = 1920;
      let playerSheet;
      // Set the position and dimensions of the sprite
      character.anchor.set(1);
      character.x = app.view.height / 3;
      character.y = app.view.height / 2;
      character.width = 64;
      character.height = 64;
      character.interactive = true;
      // Enable interactivity for the character sprite
      app.stage.interactive = true;

      app.stage.on("pointertap", onCanvasClick);

      function onCanvasClick(event) {
        character.x = event.data.global.x;
        // Move the character to the clicked position
      }
      // Add the application to the page
      app.stage.addChild(sprite, character);
    }
  },
};
</script>

<style>
</style>