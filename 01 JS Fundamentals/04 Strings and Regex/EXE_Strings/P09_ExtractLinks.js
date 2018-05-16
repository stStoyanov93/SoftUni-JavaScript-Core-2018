function getExtractedLinks(text) {
    let links = [];
    let pattern = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    for(let line of text) {
        let match;

        while (match = pattern.exec(line)) {
            links.push(match[0]);
        }
    }

    return links.join('\n');
}