function getReversedString(data) {
    let chars = data.join('').split('');
    let reversedString = chars.reverse().join('');

    return reversedString;
}