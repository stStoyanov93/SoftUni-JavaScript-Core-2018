function extractText() {
    let items = $('ul#items li')
        .toArray()
        .map(i => i.textContent)
        .join(', ');

    $('#result').text(items);
}