function getValidity(data) {
    [x1, y1, x2, y2] = data;

    console.log(checkIsValid(x1, y1, 0, 0));
    console.log(checkIsValid(x2, y2, 0, 0));
    console.log(checkIsValid(x1, y1, x2, y2));

    function checkIsValid(x1, y1, x2, y2) {
        let deltaX = x2 - x1;
        let deltaY = y2 - y1;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance % 1 == 0) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }
}