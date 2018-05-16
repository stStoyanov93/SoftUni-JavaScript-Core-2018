function printCatalogue(data) {
    let initials = new Set();
    let products = new Map();

    for (let row of data) {
        let [productName, price] = row.split(' : ');
        let initial = productName[0];

        initials.add(initial);
        products.set(productName, price);
    }

    let sortedInitials = [...initials.keys()].sort();
    let sortedProducts = [...products.entries()].sort();

    for (let i of sortedInitials) {
        console.log(i);

        for (let [name, price] of sortedProducts) {
            if (name.startsWith(i)){
                console.log(`  ${name}: ${price}`);
            }
        }
    }
}