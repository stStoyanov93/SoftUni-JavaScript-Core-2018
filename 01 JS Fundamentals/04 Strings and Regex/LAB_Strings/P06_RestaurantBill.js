function getBill(data) {
    let products = data.filter((e, i) => i % 2 == 0);
    let sum = data.filter((e, i) => i % 2 == 1).map(Number).reduce((a, b) => a + b);

    return `You purchased ${products.join(', ')} for a total sum of ${sum}`;
}