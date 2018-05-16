function calculateDistance(data) {
    let [speed1, speed2, timeInSeconds] = data;

    let distance1 = speed1 / 3.6 * timeInSeconds;
    let distance2 = speed2 / 3.6 * timeInSeconds;
    let absoluteDistance = Math.abs(distance1 - distance2);

    return absoluteDistance;
}

calculateDistance([0, 60, 3600]);