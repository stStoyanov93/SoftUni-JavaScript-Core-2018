function printResult(data) {
    let number = data[0];

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x * 0.8;

    for (let i = 1; i < 6; i++){
        let operation = data[i];

        switch (operation){
            case 'chop':
                number = chop(number);
                break;
            case 'dice':
                number = dice(number);
                break;
            case 'spice':
                number = spice(number);
                break;
            case 'bake':
                number = bake(number);
                break;
            case 'fillet':
                number = fillet(number);
                break;
        }

        console.log(number);
    }
}