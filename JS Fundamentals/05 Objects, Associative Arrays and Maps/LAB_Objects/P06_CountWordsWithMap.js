function printWordsAndTheirCount(text) {
    let validWords = text.join(' ')
        .toLowerCase()
        .split(/\W+/)
        .filter(e => e != '');

    let words = new Map();

    for (word of validWords){
        if (!words.has(word)){
            words.set(word, 0);
        }

        words.set(word, words.get(word) + 1)
    }

    let sortedWords = Array.from(words.keys()).sort();

    for(let key of sortedWords) {
        console.log(`'${key}' -> ${words.get(key)} times`);
    }
}