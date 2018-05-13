function getCalculatedOutput(data) {
    data = data.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));

    return data;
}