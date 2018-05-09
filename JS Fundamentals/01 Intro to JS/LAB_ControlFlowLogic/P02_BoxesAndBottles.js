function calculateNeededBoxes(numberOfBottles, capacityOfBox){
    let neededBoxes = Math.ceil(numberOfBottles / capacityOfBox);
    return neededBoxes;
}