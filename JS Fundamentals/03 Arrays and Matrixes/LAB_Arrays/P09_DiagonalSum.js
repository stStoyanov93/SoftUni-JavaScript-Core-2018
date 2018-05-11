function calculateSums(matrix) {
    let mainSum = 0;
    let secondarySum = 0;
    
    for (let row = 0; row < matrix.length; row++){
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }

    return `${mainSum} ${secondarySum}`;
}