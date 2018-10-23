//P01
function coffeeMachine(inputArr){
    let totalIncome = 0;

    for (let line of inputArr){
        let splittedLine = line.split(/, /g);
        let coins = +(splittedLine[0]);
        let type = splittedLine[1];
        let price = 0;

        if (type == 'coffee'){
            let coffeePrice = splittedLine[2] == 'caffeine' ? 0.8 : 0.9
            price += coffeePrice;

            if (splittedLine[3] == 'milk'){
                price += 0.1

                if (+(splittedLine[4])){
                    price += 0.1;
                }
            }
            else if (+(splittedLine[3])){
                price += 0.1;
            }
        }
        else {
            price += 0.8;

            if (splittedLine[2] == 'milk'){
                price += 0.1

                if (+(splittedLine[3])){
                    price += 0.1;
                }
            }
            else if (+(splittedLine[2])){
                price += 0.1;
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



//P02

//P03

//P04