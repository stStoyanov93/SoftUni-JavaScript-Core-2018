function getChessBoard(sizeOfBoard) {
    let html = '<div class="chessboard">\n';

    for(let i = 0; i < sizeOfBoard; i++) {
        html += '\t<div>\n';

        for(let j = 0; j < sizeOfBoard; j++) {
            let color = (i + j) % 2 == 0 ? "black" : "white";
            html += `\t\t<span class="${color}"></span>\n`;
        }

        html += '\t</div>\n';
    }

    html += '</div>';

    return html;
}