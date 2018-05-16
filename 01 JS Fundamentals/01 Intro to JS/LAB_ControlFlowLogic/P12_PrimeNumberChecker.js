function isPrime(number) {
    let isPrime = true;
    let maxNumToCheck = Math.ceil(Math.sqrt(number));

    for (let i = 2; i <= maxNumToCheck; i++){
        if (i === number){
            continue;
        }

        if(number % i === 0){
            isPrime = false;
            break;
        }
    }

    return isPrime && (number > 1);
}