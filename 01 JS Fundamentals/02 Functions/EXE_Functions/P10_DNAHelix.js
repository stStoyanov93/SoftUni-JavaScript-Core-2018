function printSequence(inputNumber){
    let sequence = 'ATCGTTAGGG';
    let sequenceLength = sequence.length;
    let counter = 0;

    for (let i = 0; i < inputNumber; i++){
        if (i % 4 == 0) {
            console.log(`**${sequence[counter%10]}${sequence[counter % 10 + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${sequence[counter%10]}--${sequence[counter % 10 + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${sequence[counter%10]}----${sequence[counter%10 + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${sequence[counter%10]}--${sequence[counter % 10 + 1]}*`);
        }

        counter += 2
    }
}