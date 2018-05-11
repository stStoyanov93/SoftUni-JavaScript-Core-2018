function getFilteredElements(data) {
    let biggestElement = Number.NEGATIVE_INFINITY;
    let result = [];

    for (let e of data) {
        if (e >= biggestElement){
            result.push(e);
            biggestElement = e;
        }
    }

    return result.join('\n');
}