function printTownsPopulation(data) {
    let towns = new Map();

    for (let row of data) {
        [townName, population] = row.split(' <-> ');
        population = Number(population);

        if(!towns.has(townName)){
            towns.set(townName, 0);
        }

        towns.set(townName, towns.get(townName) + population);
    }

    for (let [town, pop] of towns) {
        console.log(town + " : " + pop);
    }
}