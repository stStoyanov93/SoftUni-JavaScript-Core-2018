function functionalCalculator(num1, num2, operation) {
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;

    function getCorrectOperation(num1, num2, op){
        return op(num1, num2);
    }

    switch (operation){
        case '+': return getCorrectOperation(num1, num2, add);
        case '-': return getCorrectOperation(num1, num2, subtract);
        case '*': return getCorrectOperation(num1, num2, multiply);
        case '/': return getCorrectOperation(num1, num2, divide);
    }
}