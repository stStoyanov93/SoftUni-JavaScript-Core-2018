function getAllDates(data) {
    let result = [];
    let pattern = /\b([0-9]{1,2})-([A-Z]{1}[a-z]{2})-([0-9]{4})\b/g;
    let match;

    for (let line of data) {
        while (match = pattern.exec(line)){
            let date = `${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`;
            result.push(date);
        }
    }

    return result.join('\n');
}