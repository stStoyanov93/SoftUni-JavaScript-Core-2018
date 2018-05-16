function getHTMLTable(json) {
    let data = JSON.parse(json);

    let html = '<table>\n';
    html += ' \t<tr>';

    Object.keys(data[0]).forEach(k => html += `<th>${k}</th>`);
    html += '</tr>\n';

    for(let obj of data) {
        html += '\t<tr>';

        Object.keys(obj)
            .forEach(k => html += `<td>${htmlEscape(String(obj[k]))}</td>`);

        html += '</tr>\n';
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