

export function lintmsg(errors) {
    // try {
        
    
        let cssgenerated = ``;


        errors.forEach((error, index) => {
                console.log(error, "\\", errors)
                cssgenerated += `
                .errorline:nth-of-type(${(index + 1) + ""})::before {
                    content: "${error.line + ""}"!important;
                }
                .errorline:nth-of-type(${(index + 1) + ""})::after {
                    content: "${error.message}"!important;
                }`;
                errorlines.push(error.line);
        });
        
        console.log("CSS 1 > ", cssgenerated);
        
        var cssresult = `${cssgenerated}
        .errorline::before {
            content: "0";
            height: ${document.querySelector(".cm-line") ? document.querySelector(".cm-line").offsetHeight + "" : 0 + ""}px;
            width: 100%;
            background-color: var(--cm-errorLineBg);
            position: absolute;
            left: -100%;
            z-index: 1000;
            font-family: var(--editor-font-family);
            font-size: var(--editor-font-family);
            color: var(--cm-error-gutter);
            text-align: right;
            padding-right: 28px;
            box-sizing: border-box;
        }`;
        
        var linterElement = document.getElementById("linter");
        
        linterElement.innerHTML = cssresult;
        
    // } catch(err) {
    //     return false;
    // }
}