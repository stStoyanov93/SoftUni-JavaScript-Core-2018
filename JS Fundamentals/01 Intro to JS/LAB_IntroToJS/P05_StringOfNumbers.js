function stringOfNumbers (num) {
    let endNumber = num * 1;
    let endStr = '';

    for(i = 1; i <= endNumber; i++) {
        endStr += i;
    }

    console.log(endStr);
}