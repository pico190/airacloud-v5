

export function lintmsg(errors, setClassNameExtension, classNameExtension) {
    try {
        
        let cssgenerated = ``;
        setClassNameExtension({
            add: (lineNumber) => {
                errors.forEach((error, index) => {
                    if (lineNumber === error.line) {
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
        });
        
        console.log("CSS 1 > ", cssgenerated);
        
        var cssresult = `
        
        .errorline:nth-of-type(1)::before {
            content: "${errors[0].line + ""}";
        }
        .errorline:nth-of-type(2)::before {
            content: "${errors[1].line + ""}";
        }
        .errorline:nth-of-type(3)::before {
            content: "${errors[2].line + ""}";
        }
        .errorline:nth-of-type(4)::before {
            content: "${errors[3].line + ""}";
        }
        .errorline:nth-of-type(5)::before {
            content: "${errors[4].line + ""}";
        }
        .errorline:nth-of-type(6)::before {
            content: "${errors[5].line + ""}";
        }
        .errorline:nth-of-type(7)::before {
            content: "${errors[6].line + ""}";
        }
        .errorline:nth-of-type(8)::before {
            content: "${errors[7].line + ""}";
        }
        .errorline:nth-of-type(9)::before {
            content: "${errors[8].line + ""}";
        }
        .errorline:nth-of-type(10)::before {
            content: "${errors[9].line + ""}";
        }
        .errorline:nth-of-type(11)::before {
            content: "${errors[10].line + ""}";
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
        
        if (linterElement.innerHTML !== cssresult) {
            linterElement.innerHTML = cssresult;
        }
        
        
    } catch(err) {
        return false;
    }
}