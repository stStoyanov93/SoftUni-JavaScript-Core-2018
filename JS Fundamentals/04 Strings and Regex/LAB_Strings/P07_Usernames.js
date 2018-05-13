function getUsers(data) {
    let result = [];

    for (let emailAddress of data) {
        let [name, wholeDomain] = emailAddress.split('@');

        let username = `${name}.`;

        let domainTokens = wholeDomain.split('.');
        domainTokens.forEach(d => username += d[0]);

        result.push(username);
    }

    return result.join(', ');
}