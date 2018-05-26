function search() {
    //reset font
    let allTowns = $('ul#towns li');
    allTowns.css('font-weight', '');

    let userInput = $('input#searchText').val();

    let matchedTowns = $(`ul#towns li:contains(${userInput})`);
    matchedTowns.css('font-weight', 'bold');

    $('#result').text(matchedTowns.length);
}