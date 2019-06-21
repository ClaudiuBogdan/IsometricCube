<template>
  <div id="app">
    <svg width="100%" height="100%">
      <!-- Define the pattern -->
      <pattern
        id="pattern-cubes"
        x="0"
        y="125"
        patternUnits="userSpaceOnUse"
        width="125"
        height="200"
        viewBox="0 0 10 16"
      >
        <!-- Cube code courtest of SVGeneration: http://www.svgeneration.com/recipes/3D-Cubes/ -->
        <g id="cube">
          <!-- We'll apply the `fill` in the CSS for flexibility -->
          <path class="left-shade" d="M0 0l5 3v5l-5 -3z"></path>
          <path class="right-shade" d="M10 0l-5 3v5l5 -3"></path>
        </g>

        <!-- Apply the cube shapes -->
        <use x="5" y="8" xlink:href="#cube"></use>
        <use x="-5" y="8" xlink:href="#cube"></use>
      </pattern>

      <!-- The canvas for our pattern -->
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-cubes)"></rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "app"
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

.left-shade {
  fill: $fill;
}

.right-shade {
  fill: lighten($fill, 30%);
}
</style>
