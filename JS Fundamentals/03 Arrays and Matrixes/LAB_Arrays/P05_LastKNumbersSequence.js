function getSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++){
        let startIndex = Math.max(0, i - k);
        let endIndex = i + k;

        let element = sequence.slice(startIndex, endIndex)
            .reduce((a, b) => a + b);

        sequence.push(element);
    }

    return sequence.join(' ');
}