function printProcessedResult(commands) {
    let result = [];
    let number = 1;

    for (let command of commands) {
        if (command == 'add'){
            result.push(number);
        } else {
            result.pop();
        }

        number++;
    }

    if (result.length == 0){
        console.log('Empty');
    } else {
        result.forEach(e => console.log(e));
    }
}