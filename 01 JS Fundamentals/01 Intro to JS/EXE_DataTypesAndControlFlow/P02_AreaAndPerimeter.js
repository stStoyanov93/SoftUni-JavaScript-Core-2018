//this doesn't pass in judge, only one function is accepted as input there
function printRectangleAreaAndPerimeter(length, width) {
    let area = calculateRectangleArea(length, width);
    let perimeter = calculateRectanglePerimeter(length, width);

    console.log(area);
    console.log(perimeter);
}

function calculateRectangleArea(length, width) {
    let area = length * width;
    return area;
}

function calculateRectanglePerimeter(length, width) {

    let perimeter = 2 * (length + width);
    return perimeter;
}

printRectangleAreaAndPerimeter(2, 2);