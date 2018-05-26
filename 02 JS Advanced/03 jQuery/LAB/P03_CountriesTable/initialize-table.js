function initializeTable() {
    let countryInput = $('input#newCountryText');
    let capitalInput = $('input#newCapitalText');

    //add default values
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();

    $('a#createLink').on('click', addNewCountry);

    function addNewCountry() {
        let country = countryInput.val();
        let capital = capitalInput.val();

        createCountry(country, capital);
        fixLinks();

        //clear input boxes
        countryInput.val('');
        capitalInput.val('');
    }

    function createCountry(country, capital) {
        let row = $('<tr>')
            .append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up] </a>').click(moveUp))
                .append($('<a href="#">[Down] </a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));

        row.css('display', 'none');
        row.appendTo($('table#countriesTable'));
        row.fadeIn();
    }
    
    function moveUp() {
        let row = $(this).parent().parent();

        row.fadeOut(() => {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixLinks();
        })
    }
    
    function moveDown() {
        let row = $(this).parent().parent();

        row.fadeOut(() => {
            row.insertAfter(row.next());
            row.fadeIn();
            fixLinks();
        })
    }
    
    function deleteRow() {
       let row = $(this).parent().parent();

        row.fadeOut(() => {
            row.remove();
           fixLinks();
       })
    }

    function fixLinks() {
        //show all links
        $('#countriesTable a').css('display', 'inline');

        let tableRows = $('#countriesTable tr');

        //hide first Up link
        $(tableRows[2]).find("a:contains('Up')")
            .css('display', 'none');

        //hide last Down link
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');
    }
}
