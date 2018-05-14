function hidePersonalDetails(originalDocument) {
    let namePattern = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let phonePattern = /\+[0-9\-]{10}(?=\t| |$)/g;
    let idPattern = /![a-zA-Z0-9]+(?=\t| |$)/g;
    let secretBasePattern = /_[a-zA-Z0-9]+(?=\t| |$)/g;

    let fixedDocument = '';

    for(let line of originalDocument) {
        line = line
            .replace(namePattern, m => "|".repeat(m.length));

        line = line
            .replace(phonePattern, m => "|".repeat(m.length));

        line = line
            .replace(idPattern, m => "|".repeat(m.length));

        line = line
            .replace(secretBasePattern, m => "|".repeat(m.length));

        fixedDocument += line + '\n';
    }

    return fixedDocument;
}