function getWordOccurances(text, word) {
    let pattern = new RegExp(`\\b${word}\\b`, 'gi');
    let count = 0;
    let match = pattern.exec(text);

    while (match){
        count++;
        match = pattern.exec(text);
    }

    return count;
}