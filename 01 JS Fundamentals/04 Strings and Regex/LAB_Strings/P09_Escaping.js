function getEscapedHTML(data) {
    let forbiddenChars = ["&", "<", ">", '"'];
    let replacementChars = ["&amp;", "&lt;", "&gt;", "&quot;"];

    let html = "<ul>\n";

    for (let line of data){
        html += "  <li>";

        for (let i in forbiddenChars){
            line = line.split(forbiddenChars[i]).join(replacementChars[i]);
        }

        html += line + "</li>\n";
    }

    html += "</ul>";
    return html;
}