function attachEvents() {
    $('a').click(clicked);
    
    function clicked() {
        //remove class clicked from the previously clicked button
        $('.selected').removeClass('selected');

        $(this).addClass('selected');
    }
}
