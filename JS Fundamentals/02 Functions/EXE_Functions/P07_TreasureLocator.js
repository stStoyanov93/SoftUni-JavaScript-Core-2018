function locateTreasure(data) {
    let isOnTuvalu = (x, y) => x >= 1 && x <= 3 && y >= 1 && y <= 3;
    let isOnTokelau = (x, y) => x >= 8 && x <= 9 && y >= 0 && y <= 1;
    let isOnSamoa = (x, y) => x >= 5 && x <= 7 && y >= 3 && y <= 6;
    let isOnTonga = (x, y) => x >= 0 && x <= 2 && y >= 6 && y <= 8;
    let isOnCook = (x, y) => x >= 4 && x <= 9 && y >= 7 && y <= 8;

    for(let i = 0; i < data.length; i = i + 2) {
        let x = data[i];
        let y = data[i+1];

        if(isOnTuvalu(x, y)) {
            console.log("Tuvalu");
        } else if (isOnTokelau(x, y)) {
            console.log("Tokelau");
        } else if(isOnSamoa(x, y)) {
            console.log("Samoa");
        } else if (isOnTonga(x, y)) {
            console.log("Tonga");
        } else if(isOnCook(x, y)) {
            console.log("Cook");
        } else {
            console.log("On the bottom of the ocean");
        }
    }
}