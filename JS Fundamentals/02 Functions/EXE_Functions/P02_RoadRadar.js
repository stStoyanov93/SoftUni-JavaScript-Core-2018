function getRadarOutput(data) {
    //return nothing if the driver is not exceeding the limit
    let output = '';

    let [speed, zone] = data;
    let limit = getZoneLimit();

    if (speed <= limit){
        return output;
    }

    output = getSeverityOfViolation();
    return output;

    function getZoneLimit() {
        switch (zone){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    
    function getSeverityOfViolation() {
        let excessiveSpeed = speed - limit;

        if(excessiveSpeed <= 20){
            return 'speeding';
        } else if (excessiveSpeed <= 40){
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }

    }
}