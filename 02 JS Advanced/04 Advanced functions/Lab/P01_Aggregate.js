function aggregate(arr){
    function reduce(arr, func){
        result = arr[0]

        for (const el of arr.slice(1)) {
            result = func(result, el);
        }

        return result
    }

    console.log(`Sum = ${reduce(arr, (a, b) => a + b)}`);
    console.log(`Min = ${reduce(arr, (a, b) => Math.min(a, b))}`);
    console.log(`Max = ${reduce(arr, (a, b) => Math.max(a, b))}`);
    console.log(`Product = ${reduce(arr, (a, b) => a * b)}`);
    console.log(`Join = ${reduce(arr, (a, b) => "" + a + b)}`);
}