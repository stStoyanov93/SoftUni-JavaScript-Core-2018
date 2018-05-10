function getModifiedNumber(number) {
    let addNine = x => x + '9';
    let average = getAverage();

    while (average <= 5){
        number = addNine(number);
        average = getAverage();
    }

    return number;

    function getAverage() {
        let avg = 0;
        number = number.toString();

        for (let digit of number) {
            avg += Number(digit);
        }

        avg /= number.length;
        return avg;
    }
}