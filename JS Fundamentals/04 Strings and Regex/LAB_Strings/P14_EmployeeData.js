function getParsedEmployees(data) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/;
    let result = [];

    for(let line of data) {
        let match = pattern.exec(line);

        if (match) {
            let employee = `Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`;
            result.push(employee);
        }
    }

    return result.join('\n');
}