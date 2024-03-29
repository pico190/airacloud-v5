

export function lintmsg(errors, setClassNameExtension) {
    // try {
        
        let cssgenerated = ``;
        setClassNameExtension((lineNumber) => {
                errors.forEach((error, index) => {
                    if (lineNumber === error.line) {
                        console.log(error, "\\", errors)
                        return 'errorline'
                        // cssgenerated += `
                        // .errorline:nth-of-type(${(index + 1) + ""})::before {
                        //     content: "${error.line + ""}"!important;
                        // }
                        // .errorline:nth-of-type(${(index + 1) + ""})::after {
                        //     content: "${error.message}"!important;
                        // }`;
                    }
                });
            },
        );
        
        console.log("CSS 1 > ", cssgenerated);
        
        var cssresult = `
        
        .errorline:nth-of-type(1)::before {
            content: "${errors[0].line ? errors[0].line : "0" + ""}";
        }
        .errorline:nth-of-type(2)::before {
            content: "${errors[1].line ? errors[1].line : "0" + ""}";
        }
        .errorline:nth-of-type(3)::before {
            content: "${errors[2].line ? errors[2].line : "0" + ""}";
        }
        .errorline:nth-of-type(4)::before {
            content: "${errors[3].line ? errors[3].line : "0" + ""}";
        }
        .errorline:nth-of-type(5)::before {
            content: "${errors[4].line ? errors[4].line : "0" + ""}";
        }
        .errorline:nth-of-type(6)::before {
            content: "${errors[5].line ? errors[5].line : "0" + ""}";
        }
        .errorline:nth-of-type(7)::before {
            content: "${errors[6].line ? errors[6].line : "0" + ""}";
        }
        .errorline:nth-of-type(8)::before {
            content: "${errors[7].line ? errors[7].line : "0" + ""}";
        }
        .errorline:nth-of-type(9)::before {
            content: "${errors[8].line ? errors[8].line : "0" + ""}";
        }
        .errorline:nth-of-type(10)::before {
            content: "${errors[9].line ? errors[9].line : "0" + ""}";
        }
        .errorline:nth-of-type(11)::before {
            content: "${errors[10].line ? errors[10].line : "0" + ""}";
        }
        .errorline::before {
            content: "0";
            height: ${document.querySelector(".cm-line").offsetHeight}px;
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