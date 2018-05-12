function printOrbit(data){
    let [rows, cols, startRow, startColumn] = data;

    let matrix = [];
    
    for(let row = 0; row < rows; row++) {
        matrix.push([]);
    }

    for(let row = 0; row< rows; row++) {
        for(let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startColumn)) + 1;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}