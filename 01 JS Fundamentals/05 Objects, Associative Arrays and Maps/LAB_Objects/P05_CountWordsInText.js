function getWordsAndTheirCount(text) {
    let validWords = text.join(' ')
        .split(/\W+/)
        .filter(e => e != '');

    let words = {};

    for (word of validWords){
        if (!words.hasOwnProperty(word)){
            words[word] = 0;
        }

        words[word]++;
    }

    return JSON.stringify(words);
}