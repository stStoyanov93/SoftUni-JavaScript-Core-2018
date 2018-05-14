function getHTMLTable(data) {
    let players = JSON.parse(data);

    let html = '<table>\n';
    html += '\t<tr><th>name</th><th>score</th></tr>\n';

    for(let player of players){
        let escapedName = htmlEscape(player.name);

        html += `\t<tr><td>${escapedName}</td><td>${player.score}</td></tr>\n`;
    }

    html += '</table>';

    return html;

    function htmlEscape(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;' };

        return text.replace(/[\"&'<>]/g, char => map[char]);
    }
}