function getUppercaseWords(input) {
    let uppercaseInput = input.toUpperCase();
    let words = getWords();

    return words.join(', ');

    function getWords() {
        return uppercaseInput.split(/\W/).filter(w => w != '');
    }
}