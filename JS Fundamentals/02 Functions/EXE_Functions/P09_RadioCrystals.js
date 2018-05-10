function shapeCrystal(data) {
    let targetTickness = data[0];

    let cut = (x) => x / 4;
    let lap = (x) => x * 0.8;
    let grind = (x) => x - 20;
    let etch = (x) => x - 2;
    let transportAndWash = (x) => {
        console.log('Transporting and washing');
        return Math.floor(x);
    }
    let xray = (x) => {
        console.log('X-ray x1');
        return ++x;
    };



    for (let i = 1; i < data.length; i++){
        let chunk = data[i];
        console.log(`Processing chunk ${chunk} microns`);

        chunk = processChunk(targetTickness, chunk, 'Cut', cut);
        chunk = processChunk(targetTickness, chunk, 'Lap', lap);
        chunk = processChunk(targetTickness, chunk, 'Grind', grind);
        chunk = processChunk(targetTickness, chunk, 'Etch', etch);

        if (chunk + 1 == targetTickness){
            chunk = xray(chunk);
        }

        console.log(`Finished crystal ${chunk} microns`);
    }

    function processChunk(targetSize, chunkToProcess, operationName, operation) {
        let counter = 0;

        while (operation(chunkToProcess) >= targetSize || chunkToProcess - targetSize === 1){
            chunkToProcess = operation(chunkToProcess);
            counter++;
        }

        if (counter > 0){
            console.log(`${operationName} x${counter}`);
            chunkToProcess = transportAndWash(chunkToProcess);
        }

        return chunkToProcess;
    }
}