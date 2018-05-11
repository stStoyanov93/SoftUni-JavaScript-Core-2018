function processElements(data) {
    let arr = data.filter((e, i) => i % 2 == 1)
        .map(e => e * 2)
        .reverse();

    return arr.join(' ');
}