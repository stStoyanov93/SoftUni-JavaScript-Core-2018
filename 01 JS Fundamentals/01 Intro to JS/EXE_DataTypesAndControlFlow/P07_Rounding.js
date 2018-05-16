function roundToGivenPrecision(data) {
    let [number, precision] = data;

    if (precision > 15){
        precision = 15;
    }

    return Number(number.toFixed(precision));
}