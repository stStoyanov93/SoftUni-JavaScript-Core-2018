function tripLength(data) {
    let [x1, y1, x2, y2, x3, y3] = data.map(Number);

    let distance123 = calculateDistance(x1, y1, x2, y2)
        + calculateDistance(x2, y2, x3, y3);

    let distance132 = calculateDistance(x1, y1, x3, y3)
        + calculateDistance(x3, y3, x2, y2);

    let distance213 = calculateDistance(x2, y2, x1, y1)
        + calculateDistance(x1, y1, x3, y3);

    let shortestDistance = Math.min(distance123, distance132, distance213);

    if (shortestDistance == distance123) {
        console.log(`1->2->3: ${shortestDistance}`);
    } else if (shortestDistance == distance132) {
        console.log(`1->3->2: ${shortestDistance}`);
    } else  if (shortestDistance == distance213) {
        console.log(`2->1->3: ${shortestDistance}`);
    }

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
}