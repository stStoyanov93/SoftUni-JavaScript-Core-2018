function attachEventsListeners() {
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convert);

    let rates = {
            'km' : 1000,
            'm' : 1,
            'cm' : 0.01,
            'mm' : 0.001,
            'mi' : 1609.34,
            'yrd' : 0.9144,
            'ft' : 0.3048,
            'in' : 0.0254,
    }

    function convert() {
        let inputNumber = Number(document.getElementById('inputDistance').value);

        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let outputNumber = document.getElementById('outputDistance');
        outputNumber.value = (inputNumber * rates[inputUnits] / rates[outputUnits]);
    }
}