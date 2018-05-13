function getExtractedText(text) {
    let result = [];
    let openIndex = text.indexOf('(');

    while (openIndex > -1){
        let closeIndex = text.indexOf(')', openIndex);

        if (closeIndex == -1){
            break;
        }

        let searchedText = text.substring(openIndex + 1, closeIndex);
        result.push(searchedText);

        openIndex = text.indexOf('(', closeIndex);
    }

    return result.join(', ');
}