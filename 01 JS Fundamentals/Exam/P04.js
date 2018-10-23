function coffee(data){
    let brands = new Map();
    for (let line of data){
        let splittedLine = line.split(/, /);

        let [command, brandName, coffeeType, expDate, count] = splittedLine;

        if (command == "IN"){

            if (!brands.has(brandName)) {
                brands.set(brandName, new Map());
            }

            let brandsMap = brands.get(brandName);

            if (!brandsMap.has(coffeeType)) {
              brandsMap.set(coffeeType, {expiration: expDate, quantity: count});
               continue;
            }

            if (brandsMap.get(coffeeType).expiration < expDate){
                brandsMap.get(coffeeType).expiration = expDate;
                brandsMap.get(coffeeType).quantity = count;
            } else if (brandsMap.get(coffeeType).expiration == expDate && count > 0){
                brandsMap.get(coffeeType).quantity += count;
            } 
        } else if (command == "OUT"){

            if(brands.has(brandName)){
                if(brands.get(brandName).has(coffeeType)){
                    let searchedCoffee = brands.get(brandName).get(coffeeType);
                    
                    if(expDate < searchedCoffee.expiration && count <= searchedCoffee.quantity){
                        searchedCoffee.quantity -= count;
                    }
                }
               
            }
        } else if (command == "REPORT"){
            console.log('>>>>> REPORT! <<<<<')

            for (let br of brands.keys()){
                console.log(`Brand: ${br}:`)

                for (let coffeeType of brands.get(br).keys()){
                    let coffeeInfo = brands.get(br).get(coffeeType);
                    console.log(`-> ${coffeeType} -> ${coffeeInfo.expiration} -> ${coffeeInfo.quantity}.`)
                }
            }
        } else if (command == "INSPECTION"){
            console.log('>>>>> INSPECTION! <<<<<');

            let sortedBrands = [...brands.keys()].sort((a, b) => a.localeCompare(b));
            
            for (let br of sortedBrands){
                console.log(`Brand: ${br}:`)

                let sortedCoffees = [...brands.get(br).entries()].sort((a, b) => b[1].quantity - a[1].quantity);

                for (let coffeeType of sortedCoffees){
                    console.log(`-> ${coffeeType[0]} -> ${coffeeType[1].expiration} -> ${coffeeType[1].quantity}.`)
                }
            }
        }

        
    }
}

coffee([
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 10",

    "REPORT",
  ]
  );