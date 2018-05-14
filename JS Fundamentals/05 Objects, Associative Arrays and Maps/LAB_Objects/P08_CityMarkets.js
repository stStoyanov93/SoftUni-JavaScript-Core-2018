function printMarketsInfo(data) {
    let markets = new Map();

    for(let line of data) {
        let townTokens = line.split(/\s+->\s+/);
        let town = townTokens[0];
        let product = townTokens[1];

        let total = townTokens[2] //quantity and price
            .split(/\s+:\s+/)
            .map(Number).reduce((a, b) => a * b);

        if(! markets.has(town)) {
            markets.set(town, new Map());
        }

        if(! markets.get(town).has(product)) {
            markets.get(town).set(product, 0);
        }

        markets.get(town)
            .set(product, markets.get(town).get(product) + total);
    }

    for(let [town, product] of markets) {
        console.log(`Town - ${town}`);

        for(let [product, total] of markets.get(town)) {
            console.log(`$$$${product} : ${total}`);
        }
    }
}