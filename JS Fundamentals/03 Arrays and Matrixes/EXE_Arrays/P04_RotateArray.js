function getRotatedArray(data) {
    let rotations = Number(data.pop()) % data.length;

    for (let i = 0; i < rotations; i++){
        data.unshift(data.pop());
    }

    return data.join(' ');
}