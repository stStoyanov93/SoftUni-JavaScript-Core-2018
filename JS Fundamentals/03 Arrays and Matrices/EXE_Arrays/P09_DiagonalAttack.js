function printResult(data) {
    let matrix = data.map(row => row.split(' ').map(Number));

    //actual value is set in checkDiagonalsSum
    let sum = 0;

    let areSumsEqual = checkDiagonalsSum();

    if (areSumsEqual) {
        alterMatrix();
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }


    function checkDiagonalsSum() {
        let mainSum = 0;
        let secondarySum = 0;

        for (let row = 0; row < matrix.length; row++) {
            mainSum += matrix[row][row];
            secondarySum += matrix[row][matrix.length - row - 1];
        }

        if (mainSum != secondarySum) {
            return false;
        }

        //set sum value to be used in alter matrix
        sum = mainSum;
        return true;
    }

    function alterMatrix() {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                //check if the cell is part of a diagonal
                if (row == col || row + col + 1 == matrix.length) {
                    continue;
                }

                matrix[row][col] = sum;
            }
        }
    }
}
