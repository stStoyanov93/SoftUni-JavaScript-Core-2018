function getElements(data) {
    let filteredElemets = data.filter((e, i) => i % 2 == 0);
    let result = filteredElemets.join(' ');

    return result;
}