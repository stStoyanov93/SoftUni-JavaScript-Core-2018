function getTownsData(data) {
    let towns = [];
    let sum = 0;

    for (let line of data) {
        let inputParams = line.split('|').filter(e => e != '');
        let townName = inputParams[0].trim();
        towns.push(townName);

        sum += Number(inputParams[1].trim());
    }

    return `${towns.join(', ')}\n${sum}`;
}