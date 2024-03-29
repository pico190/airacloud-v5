

export function lintmsg(errors, setClassNameExtension) {
    try {
        
        var cssgenerated = ``
        errors.forEach((error, index) => {
            setClassNameExtension({
                add: (lineNumber) => {
                    if (lineNumber === error.line) {
                        return 'errorline';
                    }
                },
            })
            cssgenerated = cssgenerated + `
            .errorline:nth-of-type(${(index + 1) + ""})::before {
                content: "${error.line + ""}"!important;
            }
            .errorline:nth-of-type(${(index + 1) + ""})::after {
                content: "${error.message}"!important;
            }`
        })
        
        var cssresult = `${cssgenerated}
        .errorline::before {
            content : "0";
            height: ${document.querySelector(".cm-line").offsetHeight}px;
            width: 100%;
            background-color: var(--cm-errorLineBg);
            position: absolute;
            left: -100%;
            z-index: 1000;
            font-family: var(--editor-font-family);
            font-size: var(--editor-font-family);
            color: var(--cm-error-gutter)
            text-align: right;
            padding-right: 28px;
            box-sizing: border-box;
          }`

        if(!document.getElementById("linter").innerHTML === cssresult) {
            document.getElementById("linter").innerHTML = cssresult
        }
    } catch(err) {
        return false;
    }
}