function attachEvents() {
    $('ul#items').on('click', 'li', addOrRemoveFromSelected);

    $('button#showTownsButton').click(showSelectedTowns);

    function addOrRemoveFromSelected() {
        let selectedTown = $(this);

        if (selectedTown.attr('data-selected')) {
            selectedTown.removeAttr('data-selected');
            selectedTown.css('background', '');
        } else {
            selectedTown.attr('data-selected', 'true');
            selectedTown.css('background', '#DDD');
        }
    }

    function showSelectedTowns() {
        let selectedTowns = $('ul#items li[data-selected=true]')
            .toArray()
            .map(t => t.textContent).join(', ');

        $('#selectedTowns').text("Selected towns: " + selectedTowns);
    }
}