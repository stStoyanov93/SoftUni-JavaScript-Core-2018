function printNthElements(data) {
    let step = Number(data.pop());

    for (let i = 0; i < data.length; i += step){
        console.log(data[i]);
    }
}