function getArrayWithDelimeter(data) {
    let delimeter = data.pop();

    return data.join(delimeter);
}