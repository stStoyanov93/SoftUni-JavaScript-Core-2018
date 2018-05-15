function printBottledQuantity(data) {
    let juiceTypes = {};
    let bottledJuice = {};

    for(let row of data) {
        let juiceTokens = row.split(' => ');
        let fruit = juiceTokens[0];
        let quantity = Number(juiceTokens[1]);

        if(! juiceTypes.hasOwnProperty(fruit)) {
            juiceTypes[fruit] = 0;
        }

        juiceTypes[fruit] += quantity;
        
        if(juiceTypes[fruit] >= 1000) {

            if (!bottledJuice.hasOwnProperty(fruit)){
                bottledJuice[fruit] = 0;
            }

            bottledJuice[fruit] += parseInt(juiceTypes[fruit] / 1000);
            juiceTypes[fruit] %= 1000;
        }
    }

    for(let key of Object.keys(bottledJuice)) {
        console.log(`${key} => ${bottledJuice[key]}`);
    }
}