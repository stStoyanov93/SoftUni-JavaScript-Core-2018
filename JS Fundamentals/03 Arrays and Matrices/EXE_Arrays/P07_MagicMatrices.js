function isMatrixMagic(matrix){
    let rowSum = 0;
    let columnSum = 0;
    let sums = [];
    
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix.length; col++){
            rowSum += matrix[row][col];
            columnSum += matrix[col][row];
        }

        sums.push(rowSum);
        sums.push(columnSum);

        for (let i = 0; i < sums.length - 1; i++){
            if (sums[i] != sums[i + 1]){
                return false;
            }
        }

        rowSum = 0;
        columnSum = 0;
    }

    return true;
}