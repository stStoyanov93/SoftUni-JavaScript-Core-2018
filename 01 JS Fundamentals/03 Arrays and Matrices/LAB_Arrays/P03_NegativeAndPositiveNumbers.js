function sortNumbers(data) {
    let filteredData = [];

    for (let num of data) {
        if (num < 0) {
            filteredData.unshift(num);
        } else {
            filteredData.push(num);
        }
    }

    return filteredData;
}