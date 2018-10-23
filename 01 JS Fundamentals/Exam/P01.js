function coffeeMachine(inputArr){
    let totalIncome = 0;
    const milkPrice = 0.1;
    const sugarPrice = 0.1;
    const caffeinePrice = 0.8;
    const decafPrice = 0.9;
    const teaPrice = 0.8;

    for (let line of inputArr){
        let splittedLine = line.split(/, /g);
        let coins = +(splittedLine[0]);
        let type = splittedLine[1];
        let price = 0;

        if (type == 'coffee'){
            let coffeePrice = splittedLine[2] == 'caffeine' ? caffeinePrice : decafPrice
            price += coffeePrice;

            if (splittedLine[3] == 'milk'){
                price += milkPrice;

                if (+(splittedLine[4])){ 
                    price += sugarPrice;
                }
            }
            else if (+(splittedLine[3])){
                price += sugarPrice;
            }
        }
        else {
            price += teaPrice;

            if (splittedLine[2] == 'milk'){
                price += milkPrice;

                if (+(splittedLine[3])){
                    price += sugarPrice;
                }
            }
            else if (+(splittedLine[2])){
                price += sugarPrice;
            }
        }

        if (price > coins) {
            let moneyNeeded = price - coins;

            console.log(`Not enough money for ${type}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        }
        else {
            let change = coins - price;
            totalIncome += price;

            console.log(`You ordered ${type}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`)
}

coffeeMachine(['8.00, coffee, decaf, 4',
'1.00, tea, 2']
)