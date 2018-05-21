function create(sentences) {
    let count = sentences.length;
    let container = document.getElementById('content');

    for (let i = 0; i < count; i++){
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = sentences[i];
        p.style.display = 'none';

        div.appendChild(p);
        div.addEventListener('click', display);
        container.appendChild(div);
    }

    function display() {
        this.children[0].style.display = 'block';
    }
}