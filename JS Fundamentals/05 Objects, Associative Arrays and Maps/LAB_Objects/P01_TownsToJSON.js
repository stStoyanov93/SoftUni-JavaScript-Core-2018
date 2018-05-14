function getTownsInfoInJSONFormat(data) {
    //get rid of useless data (hardcoded below as properties' names)
    data.shift();

    let towns = [];

    for (let row of data) {
        let townParams = row.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());

        let town = {
            Town : townParams[0],
            Latitude  : Number(townParams[1]),
            Longitude  : Number(townParams[2]),
        };

        towns.push(town);
    }

    return JSON.stringify(towns);
}