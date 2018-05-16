function getSortedArr(originalArr) {
    let sortedArr = originalArr.sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length)
        .join('\n');

    return sortedArr;
}
