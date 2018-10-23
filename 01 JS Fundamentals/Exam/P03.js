function ticketScan(inputStr, command){
    let passengerPattern = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*.-[A-Z][A-Za-z]* | [A-Z][A-Za-z]*-[A-Z][A-Za-z]* /gm;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /gm
    let flightPattern = / [A-Z]{1,3}\d{1,5} /gm
    let companyPattern = /- [A-Z]{1}[A-Za-z]*\*[A-Z]{1}[A-Za-z]* /gm

    if(command == 'name' ){
        let unproccesedName = inputStr.match(passengerPattern)[0];
        let name = unproccesedName.split(/\s+/g).filter(x => x != '')[0].split(/-/g).join(' ');

        console.log(`Mr/Ms, ${name}, have a nice flight!`);
    } else if (command == 'flight' ){
        let unproccesedFlight = inputStr.match(flightPattern)[0];
        let flightNumber = unproccesedFlight.split(/\s+/g).filter(x => x != '')[0];

        let unproccesedAirport = inputStr.match(airportPattern)[0];
        let airportsData = unproccesedAirport.split(/\s+/g).filter(x => x != '')[0].split(/\//);

        console.log(`Your flight number ${flightNumber} is from ${airportsData[0]} to ${airportsData[1]}.`)
    } else if (command == 'company') {
        let unproccesedCompany = inputStr.match(companyPattern)[0];
        let companyName = unproccesedCompany
        .split(/-|\s+/g)
        .filter(x => x != '')[0]
        .split('*')
        .join(' ');

        console.log(`Have a nice flight with ${companyName}.`)
    } else {
        let unproccesedName = inputStr.match(passengerPattern)[0];
        let name = unproccesedName.split(/\s+/g).filter(x => x != '')[0].split(/-/g).join(' ');

        let unproccesedFlight = inputStr.match(flightPattern)[0];
        let flightNumber = unproccesedFlight.split(/\s+/g).filter(x => x != '')[0];

        let unproccesedAirport = inputStr.match(airportPattern)[0];
        let airportsData = unproccesedAirport.split(/\s+/g).filter(x => x != '')[0].split(/\//);

        let unproccesedCompany = inputStr.match(companyPattern)[0];
        let companyName = unproccesedCompany
        .split(/-|\s+/g)
        .filter(x => x != '')[0]
        .split('*')
        .join(' ');

        console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airportsData[0]} to ${airportsData[1]}. Have a nice flight with ${companyName}.`)
    }
}

ticketScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all')