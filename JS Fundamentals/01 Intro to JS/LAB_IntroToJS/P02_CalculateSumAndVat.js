function sumAndVat (n) {
    let sum = 0;

    for (let num in n) {
        sum += n[num];
    }

    let vat = sum * 0.2;

    console.log(sum);
    console.log(vat);
    console.log(sum + vat)
}