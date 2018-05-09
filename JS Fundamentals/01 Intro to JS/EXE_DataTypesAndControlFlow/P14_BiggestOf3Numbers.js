function getBiggestNumber(data) {
    let [num1, num2, num3] = data;

    return Math.max(Math.max(num1, num2), num3);
}