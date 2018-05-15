function printCompanyInfo(data) {
    let company = new Map();

    for (let row of data) {
        let [carBrand, carModel, quantity] = row.split(' | ');
                                                //.filter(e => e != '');

        quantity = Number(quantity);

        if (!company.has(carBrand)){
            company.set(carBrand, new Map());
        }

        if (!company.get(carBrand).has(carModel)){
            company.get(carBrand).set(carModel, 0);
        }

        company.get(carBrand)
            .set(carModel, company.get(carBrand).get(carModel) + quantity);
    }

    for (let [carBrand, model] of company) {
        console.log(`${carBrand}`);

        for (let [carModel, quantity] of model) {
            console.log(`###${carModel} -> ${quantity}`);
        }
    }
}