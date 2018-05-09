function convertBinaryNumber(binaryNumber) {
    //let decimal = parseInt(binaryNumber, 2);
    let decimal = Number('0b' + binaryNumber);

    return decimal;
}