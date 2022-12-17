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
    const container = new PIXI.Container();
    app.stage.addChild(container);

    // Create a new texture
    const sprite = PIXI.Sprite.from("assets/img/pixiImages/background.png");

    const womanWalk = [
      "assets/img/pixiImages/woman-walk-1.png",
      "assets/img/pixiImages/woman-walk-2.png",
      "assets/img/pixiImages/woman-walk-3.png",
      "assets/img/pixiImages/woman-walk-4.png",
      "assets/img/pixiImages/woman-walk-5.png",
      "assets/img/pixiImages/woman-walk-6.png",
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

    // Enable interactivity for the character sprite
    app.stage.interactive = true;

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    let keys = {};
    let keysDiv;
    keysDiv = document.querySelector("#keys");
    app.ticker.add(gameLoop);

    function keyDown(e) {
      keys[e.keyCode] = true;
    }
    function keyUp(e) {
      keys[e.keyCode] = false;
    }
    function gameLoop() {
      //A
      if (keys["65"]) {
        character.x -= 7;
      }
      //D
      if (keys["68"]) {
        character.x += 7;
      }
      //W
      if (keys["87"]) {
        character.y -= 7;
      }
      //S
      if (keys["83"]) {
        character.y += 7;
      }
    }

    // Add the application to the page
    app.stage.addChild(sprite, character);
  },
};
</script>

<style>
</style>