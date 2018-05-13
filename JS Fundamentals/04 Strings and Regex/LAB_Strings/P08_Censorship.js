function censoreText(text, bannedWords) {
    for (let word of bannedWords) {
        let censoredStr = '-'.repeat(word.length);

        while (text.indexOf(word) > -1){
            text = text.replace(word, censoredStr);
        }
    }

    return text;
}