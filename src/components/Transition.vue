<template>
  <div id="app">
    <img src="../assets/logo.png" alt style="width: 100%" />
    <img src="../assets/paint.jpg" alt style="width: 100%" class="img" />
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      cubeSizeFactor: window.innerWidth / 1920,
      cubePositionY: 1,
      matrix: playground.getMatrixOfCubes()
    };
  },
  methods: {
    getPositionX(posX, posY) {
      if (posY % 2 == 0) {
        return 125 * this.cubeSizeFactor * posX;
      } else {
        return (
          0.5 * 125 * this.cubeSizeFactor + 125 * this.cubeSizeFactor * posX
        );
      }
    },
    getPositionY(posY) {
      return (
        87.5 * this.cubeSizeFactor +
        0.5 * 1.6 * 125 * this.cubeSizeFactor * posY
      );
    }
  },
  mounted() {
    window.onresize = () => {
      this.cubeSizeFactor = window.innerWidth / 1920;
    };
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
div,
img {
  position: absolute;
  width: 100%;
}
// .img {
//   mask-image: linear-gradient(
//     -45deg,
//     rgba(0, 0, 0, 1),
//     rgba(0, 0, 0, 1),
//     rgba(0, 0, 0, 1),
//     rgba(0, 0, 0, 0),
//     rgba(0, 0, 0, 0)
//   );
// }
@keyframes wipe {
  0% {
    mask-position: 0 0;
  }
  100% {
    mask-position: -100vw -100vh;
  }
}

/* Second one is on top */
img:nth-child(2) {
  animation: wipe 6s infinite;
  animation-delay: 1s;
  animation-direction: alternate;
  mask-size: 200vw 200vh;
  mask-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.45, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 0)),
    color-stop(0.55, rgba(0, 0, 0, 0)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
}
</style>
