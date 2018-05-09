function convertGradsToDegrees(grad) {
    grad = grad % 400;
    let degree = grad * 0.9;

    let result = degree < 0 ? 360 + degree : degree;

    return result;
}