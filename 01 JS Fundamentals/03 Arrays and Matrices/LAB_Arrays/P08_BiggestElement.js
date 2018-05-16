function getMatrixBiggestElement(matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            if (biggestElement < matrix[row][col]){
                biggestElement = matrix[row][col];
            }
        }
    }

    return biggestElement;
}