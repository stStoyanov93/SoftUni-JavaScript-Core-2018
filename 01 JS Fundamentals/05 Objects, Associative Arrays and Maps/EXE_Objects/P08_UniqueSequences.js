function printUniqueSequences(data) {
    let uniqueSequences = [];

    for (let row of data) {
        let parsedRow = JSON.parse(row)
            .map(Number)
            .sort((a, b) => b - a); //descending order

        let sum = parsedRow.reduce((a, b) => a + b);

        //look for unique sum rather than individual elements
        if(!uniqueSequences.find(s =>
                s.reduce((a, b) => a + b) === sum)){

            uniqueSequences.push(parsedRow);
        }
    }

    //order by length of arr
    let orderedSequences = uniqueSequences.sort((a, b) => a.length > b.length);

    for (let sequence of orderedSequences) {
        console.log(`[${sequence.join(', ')}]`);
    }
}