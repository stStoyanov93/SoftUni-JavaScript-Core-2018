function getColorfulHTML(numberOfLines) {
    let html = "<ul>\n";

    for(let i = 1; i <= numberOfLines; i++){
        let color = i % 2 === 0 ? "blue" : "green";

        html += `<li><span style="color:${color}">${i}</span></li>\n`;
    }

    html += "</ul>";
    return html;
}