function calculateDistanceBetween3Points(data) {
    let [x1, y1, z1, x2, y2, z2] = data;

    let deltaX = x1 - x2;
    let deltaY = y1 - y2;
    let deltaZ = z1 - z2;

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

    return distance;
}