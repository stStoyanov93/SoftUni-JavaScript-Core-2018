function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    gradientBox.addEventListener('mousemove', moveInside);
    gradientBox.addEventListener('mouseout', moveOutside);

    let output = document.getElementById('result');

    function moveInside(event) {
        let x = event.offsetX;
        let percentage = Math.trunc((x / (this.clientWidth - 1)) * 100); // this = event.target

        output.textContent = `${percentage}%`;
    }

    function moveOutside(event) {
        output.textContent = '';
    }
}