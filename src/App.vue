<template>
  <div id="app">
    <svg width="100%" height="100%" style="position:absolute; z-index: 0;">
      <!-- Define the pattern -->
      <pattern
        id="pattern-cubes"
        x="0"
        :y="125*cubeSizeFactor"
        patternUnits="userSpaceOnUse"
        :width="125*cubeSizeFactor"
        :height="200*cubeSizeFactor"
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
    <svg
      :style="`position:absolute; left:0; top: ${87.5 *cubeSizeFactor + 1.6*125*cubeSizeFactor * cubePositionY};`"
      patternUnits="userSpaceOnUse"
      :width="125*cubeSizeFactor"
      :height="200*cubeSizeFactor"
      viewBox="0 0 10 16"
    >
      <path class="up-shade-unit" d="M 2.8e-7,3.0051119 5,0.00511184 10,3.0051119 5,6.0" />
      <path class="right-shade-unit" d="m 10,3.0051119 -5,3 V 11.005112 L 10,8.0051119" />
      <path
        class="left-shade-unit"
        d="m 2.78e-7,3.0051119 5.00000002000001,3 V 11.005112 L 2.78e-7,8.0051119 Z"
      />
    </svg>
  </div>
</template>

<script>
import { win32 } from "path";
export default {
  name: "app",
  data: () => {
    return {
      cubeSizeFactor: window.innerWidth / 1920,
      cubePositionY: 1
    };
  },
  mounted() {
    window.onresize = () => {
      this.cubeSizeFactor = window.innerWidth / 1920;
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
