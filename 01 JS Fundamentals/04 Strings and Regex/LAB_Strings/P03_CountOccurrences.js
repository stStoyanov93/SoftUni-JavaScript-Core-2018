function getOccurrences(targetString, text) {
    let count = 0;
    let index = 0;

    while (text.indexOf(targetString, index) > -1){
        count++;
        index = text.indexOf(targetString, index) + 1;
    }

    return count;
}
