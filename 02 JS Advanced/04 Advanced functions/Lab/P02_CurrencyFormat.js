function currencyFormatter(formatter){
    function getDollarFormatter(value){
        return formatter(',', '$', true, value);
    }

    return getDollarFormatter
}