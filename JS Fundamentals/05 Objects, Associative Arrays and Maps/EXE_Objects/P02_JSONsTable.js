function getJSONsTable(data) {
    let html = '<table>\n';

    for(let row of data) {
        let employee = JSON.parse(row);

        html += '    <tr>\n';
        html += `       <td>${htmlEscape(employee.name)}</td>\n`;
        html += `       <td>${htmlEscape(employee.position)}</td>\n`
        html += `       <td>${employee.salary}</td>\n`;
        html += '    <tr>\n';
    }

    html += '</table>';

    return html;

    function htmlEscape(text) {
        let specialChars = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };

        return text.replace(/[\"&'<>]/g, char => specialChars[char]);
    }
}