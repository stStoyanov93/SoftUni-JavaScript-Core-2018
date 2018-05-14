function getTownsIncome(data) {
    let towns = {};

    for (let i = 0; i < data.length; i += 2){
        let townName = data[i];
        let income = Number(data[i + 1]);

        if (!towns.hasOwnProperty(townName)){
            towns[townName] = 0;
        }

        towns[townName] += income;
    }

    return JSON.stringify(towns);
}