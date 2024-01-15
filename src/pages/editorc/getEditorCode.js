export function getEditorCode() {
    var codelements = document.getElementsByClassName("view-line")
    var code = ""

    const sortedElements = Array.from(codelements).sort((a, b) => {
        const topA = parseInt(a.style.top);
        const topB = parseInt(b.style.top);
        return topA - topB;
    });

    sortedElements.forEach(elem => {
        code += elem.innerText + "\n";
    });

    console.log(code);
}