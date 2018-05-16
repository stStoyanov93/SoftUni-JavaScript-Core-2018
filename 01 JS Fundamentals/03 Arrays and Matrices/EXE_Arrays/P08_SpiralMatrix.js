function printSpiralMatrix(rows, cols) {
    let matrix = [];

    let startRow = 0;
    let startCol = 0;
    let endRow = rows - 1;
    let endCol = cols - 1;
    let counter = 1;

    initialiseMatrix();
    fillMatrix();
    printMatrix();

    function initialiseMatrix() {
        for (let i = 0; i < rows; i++){
            matrix.push([]);
        }
    }

    function fillMatrix() {
        while(startRow <= endRow || startCol <= endCol) {
            //fill top row rightwards
            for(let i = startCol; i<=endCol; i++) {
                matrix[startRow][i] = counter++;
            }

            //descent to end row filling the matrix downwards
            for(let i = startRow + 1; i <= endRow; i++) {
                matrix[i][endCol] = counter++;
            }

            //turn left and fill towards startCol
            for(let i = endCol - 1; i >= startCol; i--) {
                matrix[endRow][i] = counter++;
            }

            //fill upwards until your reach the row below the initial startRow
            for(let i = endRow - 1; i > startRow; i--) {
                matrix[i][startCol] = counter++;
            }


            startRow++;
            startCol++;
            endRow--;
            endCol--;
        }
    }

    function printMatrix() {
        for (let row of matrix) {
            console.log(row.join(' '));
        }
    }
}