

export function lintmsg(errors, setClassNameExtension) {
    try {
        errors.forEach(error => {
            setClassNameExtension({
                add: (lineNumber) => {
                    if (lineNumber === error.line) {
                        return 'errorline';
                    }
                },
            })
        })
        document.getElementById("linter").innerHTML = `
        .errorline::before {
            content: "${errors.line}";
            height: ${document.querySelector(".cm-line").offsetHeight}px;
            width: 100%;
            background-color: var(--cm-errorLineBg);
            position: absolute;
            left: -100%;
            z-index: 1000;
            font-family: var(--editor-font-family);
            font-size: var(--editor-font-family);
            text-align: right;
            padding-right: 28px;
            box-sizing: border-box;
          }`
    } catch(err) {
        return false;
    }
}