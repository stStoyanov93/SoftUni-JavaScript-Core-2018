function getVariableNames(text) {
    let pattern = /\b_([a-zA-Z0-9]+)\b/g;
    let names = [];
    let match = pattern.exec(text);

    while (match){
        names.push(match[1]);
        match = pattern.exec(text);
    }

    return names.join(',');
}