function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let additionalText = document.getElementById('extra');

    if (button.textContent == 'More'){
        button.textContent = 'Less';
        additionalText.style.display = 'block';
    } else {
        button.textContent = 'More';
        additionalText.style.display = 'none';
    }
}