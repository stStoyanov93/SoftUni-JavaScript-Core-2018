function printUniqueWords(text) {
    let set = new Set();

    for(let line of text) {
        let words = line.toLowerCase()
            .split(/\W+/).filter(w => w != "")
            .forEach(w => set.add(w));
    }

    console.log(Array.from(set.keys()).join(", "));
}