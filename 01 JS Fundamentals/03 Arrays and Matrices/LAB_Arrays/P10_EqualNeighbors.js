function getCountOfEqualNeighbors(matrix) {
    let count = 0;
    let horiztalCheck = false;

    for(let row = 0; row < matrix.length; row++) {
        for(let col=0; col < matrix[row].length - 1; col++) {
            let currentEl = matrix[row][col]
            let nextEl =  matrix[row][col+1];
            horiztalCheck = currentEl == nextEl;

            if(horiztalCheck) {
                count++;
            }
        }
    }

    let verticalCheck = false;

    for(let row = 0; row < matrix.length - 1; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            let currentEl = matrix[row][col];
            let nextEl = matrix[row + 1][col];
            verticalCheck = currentEl === nextEl;

            if(verticalCheck) {
                count++;
            }
        }
    }

    return count;
}