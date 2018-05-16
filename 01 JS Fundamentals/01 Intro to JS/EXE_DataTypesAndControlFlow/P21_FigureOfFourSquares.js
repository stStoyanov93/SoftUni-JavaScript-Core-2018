function getFigure(sizeOfSquares) {
    let length = sizeOfSquares % 2 == 0 ? sizeOfSquares - 1 : sizeOfSquares;

    for(let i = 1; i <= length; i++) {
        if(i == 1 || i == length || (length +1)/i == 2) {
            console.log("+" + "-".repeat(sizeOfSquares-2) + "+" + "-".repeat(sizeOfSquares-2) + "+");
        } else {
            console.log("|" + " ".repeat(sizeOfSquares-2) + "|" + " ".repeat(sizeOfSquares-2) + "|");
        }
    }
}