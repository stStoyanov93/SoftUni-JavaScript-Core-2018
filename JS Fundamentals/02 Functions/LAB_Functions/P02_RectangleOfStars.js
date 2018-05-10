function printRectangle(count = 5) {
    for(let i = 1; i <= count; i++) {
        printStars(count);
    }

    //helper function
    function printStars(repetitions) {
        console.log('*' + ' *'.repeat(repetitions - 1));
    }
}