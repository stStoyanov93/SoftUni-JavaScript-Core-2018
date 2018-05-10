function printTriangle(count) {
    for(let i = 1; i <= count; i++) {
        printStars(i);
    }

    for(let i = count - 1; i >= 1; i--) {
        printStars(i);
    }

    //helper function
    function printStars(repetitions = 1) {
        console.log('*'.repeat(repetitions));
    }
}