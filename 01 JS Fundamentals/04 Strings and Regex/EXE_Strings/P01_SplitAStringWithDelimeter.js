function getSplittedElements(text, delimeter) {
    let result = text.split(delimeter).filter(e => e != '');

    return result.join('\n');
}