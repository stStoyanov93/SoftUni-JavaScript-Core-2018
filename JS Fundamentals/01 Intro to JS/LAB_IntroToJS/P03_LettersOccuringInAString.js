function letterInString (word, letter) {
    let count = 0;

    for (let l in word) {
        if (word[l] === letter) {
            count++;
        }
    }

    console.log(count);
}