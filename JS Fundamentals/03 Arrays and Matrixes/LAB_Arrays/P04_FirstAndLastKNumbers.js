function printKNumbers(data) {
    //get k number
    let controlNumber = data.shift();

    let firstKNumbers = data.slice(0, controlNumber);
    let lastKNumbers = data.slice(data.length - controlNumber, data.length);

    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}