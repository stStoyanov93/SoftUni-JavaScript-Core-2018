function atmMachine(data){
    let atmBalance = 0;
    let atmBanknotes = [];

    for (let item of data){
        if (item.length > 2) {
            let banknotes = item.map(x => +x)
            let money = banknotes.reduce((acc, cur) => acc + cur);
            atmBalance += money;
            atmBanknotes = atmBanknotes.concat(banknotes);

            console.log(`Service Report: ${money}$ inserted. Current balance: ${atmBalance}$.`)
        } else if (item.length == 2) {
            let [personBalance, amount] = item;
            let moneyToWithrow = 0;

            if (personBalance < amount) {
                console.log(`Not enough money in your account. Account balance: ${personBalance}$.`)
                continue;
            }

            if (atmBalance < amount) {
                console.log(`ATM machine is out of order!`);
                continue;
            }

            atmBanknotes.sort((a ,b) => b - a);

            for (let i = 0; i <= atmBanknotes.length; i++){
                let value = atmBanknotes[i];

                if (value > amount){
                    continue;
                }

                amount -= value;
                atmBalance -= value;
                moneyToWithrow += value;
                personBalance -= value;

                atmBanknotes.splice(i, 1, 0);

                if (amount <= 0) {
                    break;
                }
            }

            atmBanknotes = atmBanknotes.filter(x => x != 0);
            console.log(`You get ${moneyToWithrow}$. Account balance: ${personBalance}$. Thank you!`);
        } else if (item.length == 1) {
            let type = item[0];

            let count = atmBanknotes.filter(x => x == type).length;

            console.log(`Service Report: Banknotes from ${type}$: ${count}.`);
        }
        
    }
}

atmMachine([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
   ]
   )