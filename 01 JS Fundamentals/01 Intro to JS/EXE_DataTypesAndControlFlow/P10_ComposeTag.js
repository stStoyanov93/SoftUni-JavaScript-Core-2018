function generateIMGTag(data) {
    let [address, name] = data;

    return `<img src="${address}" alt="${name}">`;
}