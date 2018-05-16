function getAllWords(text) {
    let pattern = /\W+/;
    let result = text.split(pattern).filter(w => w != '');

    return result.join('|');
}