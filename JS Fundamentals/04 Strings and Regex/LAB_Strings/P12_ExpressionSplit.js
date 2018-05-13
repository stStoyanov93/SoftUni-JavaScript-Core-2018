function getSplittedExpression(expression) {
    let pattern = /[\s(),;.]/;

    let filteredResult = expression.split(pattern)
        .filter(e => e != '');

    return filteredResult.join('\n');
}