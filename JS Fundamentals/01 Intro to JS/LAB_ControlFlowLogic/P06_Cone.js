function calculateConeVolumeAndArea(r, h) {
    let slantHeight = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    let area = Math.PI * r * (r + slantHeight);

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}