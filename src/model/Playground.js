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
                const element = {
                    color: this.getRandomColor(),
                    animation: null,
                    posX: i,
                    posY: j,
                };
                setInterval(() => {
                    element.color = this.getRandomColor();
                }, Math.ceil(Math.random() * 2000));
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
