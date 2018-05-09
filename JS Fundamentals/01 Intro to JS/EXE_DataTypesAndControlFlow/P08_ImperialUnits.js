function convertInchesToFeet(inches) {
    let feet = Math.floor(inches / 12);
    inches %= 12;

    return `${feet}'-${inches}"`;
}