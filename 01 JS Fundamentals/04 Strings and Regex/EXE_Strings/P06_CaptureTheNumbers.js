function printAllNumbersFromText(text) {
    let pattern =/\d+/g;
    let result = [];

    for (let line of text) {
        let match = pattern.exec(line);

        while (match){
            result.push(match);
            match =  pattern.exec(line);
        }
    }

    //judge doesn't accept return value for this task
    console.log(result.join(' '));
}