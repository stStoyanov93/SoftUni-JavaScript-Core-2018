function printLowestPrices(data) {
    let map = new Map();

    for(let row of data) {
        let dataParams = row.split(" | ");

        let town = dataParams[0];
        let product = dataParams[1];
        let price = Number(dataParams[2]);

        if(! map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    for(let [product, townData] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let bestTownToBuyFrom;

        for(let [town, price] of townData) {

            if(price < lowestPrice) {
                lowestPrice = price;
                bestTownToBuyFrom = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${bestTownToBuyFrom})`);
    }
}