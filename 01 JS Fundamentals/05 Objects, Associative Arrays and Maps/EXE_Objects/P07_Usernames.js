function getUniqueUsernames(data) {
    let usernames = new Set();

    for(let username of data){
        usernames.add(username);
    }

    let orderedUsernames = Array.from(usernames)
        .sort((a, b) => customSort(a, b));
        //.sort((a, b) => a.localeCompare(b))
        //.sort((a, b) => a.length - b.length)

    return orderedUsernames.join('\n');

    function customSort(a, b) {
        if(a.length != b.length) {
            return(a.length - b.length);
        } else {
            //alphabetically
            return a.localeCompare(b);
        }
    }
}