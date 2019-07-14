<template>
  <div id="app">
    <svg width="100%" height="100%" style="position:absolute; z-index: 0;">
      <!-- Define the pattern -->
      <pattern
        id="pattern-cubes"
        :x="initialPosX"
        :y="cubeSizeFactor + initialPosY"
        patternUnits="userSpaceOnUse"
        :width="cubeSizeFactor"
        :height="1.6*cubeSizeFactor"
        viewBox="0 0 10 16"
      >
        <!-- Cube code courtest of SVGeneration: http://www.svgeneration.com/recipes/3D-Cubes/ -->
        <g id="cube">
          <!-- We'll apply the `fill` in the CSS for flexibility -->
          <path class="left-shade" d="M0 0l5 3v5l-5 -3z" />
          <path class="right-shade" d="M10 0l-5 3v5l5 -3" />
        </g>

        <!-- Apply the cube shapes -->
        <use x="5" y="8" xlink:href="#cube" />
        <use x="-5" y="8" xlink:href="#cube" />
      </pattern>

      <!-- The canvas for our pattern -->
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-cubes)" />
    </svg>
    <template v-for="row in matrix">
      <template v-for="element in row">
        <svg
          v-bind:key="element.posX + ' ' + element.posY"
          :style="`position:absolute; left:${getPositionX(element.posX, element.posY)}; top: ${getPositionY(element.posY)};`"
          patternUnits="userSpaceOnUse"
          :width="cubeSizeFactor"
          :height="1.6*cubeSizeFactor"
          viewBox="0 0 10 16"
        >
          <path :fill="element.color.up" d="M 2.8e-7,3.0051119 5,0.00511184 10,3.0051119 5,6.0" />
          <path :fill="element.color.left" d="m 10,3.0051119 -5,3 V 11.005112 L 10,8.0051119" />
          <path
            :fill="element.color.right"
            d="m 2.78e-7,3.0051119 5.00000002000001,3 V 11.005112 L 2.78e-7,8.0051119 Z"
          />
        </svg>
      </template>
    </template>
  </div>
</template>

<script>
import Playground from "../model/Playground";
import { setTimeout } from "timers";
const playground = new Playground({ width: 10, height: 10 });
playground.changeCubeColor(2);

export default {
  name: "app",
  data: () => {
    return {
      cubeSizeFactor: 0,
      initialPosY: 0,
      initialPosX: 0,
      matrix: playground.getMatrixOfCubes()
    };
  },
  methods: {
    initializeParams() {
      this.cubeSizeFactor = this.calculateCubeSize();
      this.initialPosX =
        (window.innerWidth - (10 + 0.5) * this.cubeSizeFactor) / 2;
      this.initialPosY = window.innerHeight / 4;
    },
    getPositionX(posX, posY) {
      if (posY % 2 == 0) {
        return this.initialPosX + this.cubeSizeFactor * posX;
      } else {
        return (
          this.initialPosX +
          0.5 * this.cubeSizeFactor +
          this.cubeSizeFactor * posX
        );
      }
    },
    getPositionY(posY) {
      return (
        this.initialPosY +
        0.7 * this.cubeSizeFactor +
        0.8 * this.cubeSizeFactor * posY
      );
    },
    calculateCubeSize() {
      const multiplayer = window.innerWidth > 1000 ? 0.5 * 125 : 125;
      const cubeSizeFactor = (multiplayer * window.innerWidth) / 1920;
      return cubeSizeFactor;
    }
  },
  mounted() {
    this.initializeParams();
    window.onresize = () => {
      this.initializeParams();
    };
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  background-color: lightgrey;
}
$fill: gray;
$fill-unit: orange;

.left-shade {
  fill: lighten($fill, 40%);
}

.right-shade {
  fill: lighten($fill, 60%);
}

.left-shade-unit {
  fill: lighten($fill-unit, 20%);
}

.right-shade-unit {
  fill: lighten($fill-unit, 40%);
}

.up-shade-unit {
  fill: lighten($fill-unit, 10%);
}
</style>
