function getCapitalizedString(text) {
    let result = text.split(' ')
        .map(e => e.toLowerCase())
        .map(e => e = e[0].toUpperCase() + e.substring(1));

    return result.join(' ');
}