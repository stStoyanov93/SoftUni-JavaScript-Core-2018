function aggregateElements(elements) {
    console.log(aggregate(elements, 0, (a, b) => a + b));
    console.log(aggregate(elements, 0, (a, b) => a + 1/b));
    console.log(aggregate(elements, '', (a, b) => a + b));

    function aggregate(arr, start, operation) {
        for (let e of arr) {
            start = operation(start, e);
        }

        return start;
    }
}