function printQuiz(data) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>'.toString());

    let dataLen = data.length;

    for (let i = 0; i < dataLen; i += 2){
        let question = data[i];
        let answer = data[i + 1];

        console.log('\t' + '<question>'.toString());
        console.log('\t\t' + question);
        console.log('\t' + '</question>'.toString());
        console.log('\t' + '<answer>'.toString());
        console.log('\t\t' + answer);
        console.log('\t' + '</answer>'.toString());
    }

    console.log(`</quiz>`.toString());
}

printQuiz(['adad', 4, 'dsaad', 5]);