function getTypeOfNumber(number) {
    if (number % 2 === 0){
        return "even";
    }
    else if (number === Math.round(number)){
        return "odd";
    }

    return "invalid"; //fractions are invalid
}