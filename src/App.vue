<template>
  <div id="app">
    <svg width="100%" height="100%" style="position:absolute; z-index: -1;">
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
      :style="`position:absolute; left:0; top: ${125*cubeSizeFactor};`"
      x="0"
      :y="125*cubeSizeFactor"
      patternUnits="userSpaceOnUse"
      :width="125*cubeSizeFactor"
      :height="200*cubeSizeFactor"
      viewBox="0 0 10 16"
    >
      <path class="left-shade-unit" d="M0 0l5 3v5l-5 -3z" />
      <path class="right-shade-unit" d="M10 0l-5 3v5l5 -3" />
      <path class="left-shade-unit" d="M0 0l5 3v5l-5 -3z" />
    </svg>
  </div>
</template>

<script>
import { win32 } from "path";
export default {
  name: "app",
  data: () => {
    return {
      cubeSizeFactor: window.innerWidth / 1920
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
}
$fill: gray;
$fill-unit: orange;

.left-shade {
  fill: $fill;
}

.right-shade {
  fill: lighten($fill, 30%);
}

.left-shade-unit {
  fill: $fill-unit;
}

.right-shade-unit {
  fill: lighten($fill-unit, 30%);
}
</style>
