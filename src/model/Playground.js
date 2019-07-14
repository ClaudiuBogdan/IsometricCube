import Color from "color";
import anime from "animejs";
export default class Playgound {
    matrixOfCubes = [];
    constructor(config) {
        this.matrixOfCubes = this.createMatrixOfCubes(
            config.width,
            config.height
        );
        console.log("Playgound created", this.matrixOfCubes);
    }

    createMatrixOfCubes(n, m) {
        const matrix = [];
        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j < m; j++) {
                const mainColor = this.getRandomColor();
                let intervalAnimation = null;
                const element = {
                    color: {
                        main: mainColor,
                        right: mainColor,
                        left: mainColor,
                        up: mainColor,
                        alpha: 1,
                    },
                    animation: {
                        startAnimation: () => {
                            intervalAnimation = setInterval(async () => {
                                const mainColor = this.getRandomColor();
                                element.color = {
                                    main: mainColor,
                                    right: mainColor,
                                    left: Color(mainColor).lighten(0.2),
                                    up: Color(mainColor).darken(0.2),
                                    alpha: 1,
                                };
                                await new Promise((resolve, reject) =>
                                    setTimeout(resolve, 500)
                                );
                                anime({
                                    targets: element.color,
                                    alpha: 0,
                                    easing: "linear",
                                    update: function() {
                                        element.updateColor();
                                    },
                                });
                            }, Math.ceil(Math.random() * 1000 + 1000));
                        },
                        stopAnimation() {
                            if (intervalAnimation) {
                                clearInterval(intervalAnimation);
                                intervalAnimation = null;
                                anime({
                                    targets: element.color,
                                    alpha: 0,
                                    easing: "linear",
                                    update: function() {
                                        element.updateColor();
                                    },
                                });
                            }
                        },
                    },
                    posX: i,
                    posY: j,
                    updateColor: (
                        color = element.color.main,
                        alpha = element.color.alpha
                    ) => {
                        element.color.right = Color(color).alpha(alpha);
                        element.color.left = Color(color)
                            .alpha(alpha)
                            .lighten(0.2);
                        element.color.up = Color(color)
                            .alpha(alpha)
                            .darken(0.2);
                    },
                };
                element.animation.startAnimation();
                row.push(element);
            }
            matrix.push(row);
        }
        return matrix;
    }

    changeCubeColor(cubeIndex) {
        console.log("Cube color changed: ", cubeIndex);
    }

    getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getMatrixOfCubes() {
        return this.matrixOfCubes;
    }
}
