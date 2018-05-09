function getPointLocation(data) {
    let [x, y, xMin, xMax, yMin, yMax] = data;

    let xCheck = x >= xMin && x <= xMax;
    let yCheck = y >= yMin && y <= yMax;

    return xCheck && yCheck ? "inside" : "outside";
}