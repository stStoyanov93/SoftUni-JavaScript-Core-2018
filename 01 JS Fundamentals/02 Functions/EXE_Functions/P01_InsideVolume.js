function getPointLocation(data) {
    let dataLen = data.length;

    for (let i = 0; i < dataLen; i += 3){
        let x = data[i];
        let y = data[i + 1];
        let z = data[i + 2];

        if (isInside(x, y ,z)){
            console.log("inside");
        }
        else{
            console.log("outside");
        }
    }

    function isInside(x, y, z) {
        //provided hardcoded values
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        let xCheck = x >= x1 && x <= x2;
        let yCheck = y >= y1 && y <= y2;
        let zCheck = z >= z1 && z <= z2;

        return xCheck && yCheck && zCheck;
    }
}