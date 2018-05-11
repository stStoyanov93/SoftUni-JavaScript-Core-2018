function getSmallestNumbers(data) {
    let arr = data.sort((a, b) => a - b)
        .slice(0, 2);

    return arr.join(' ');
}