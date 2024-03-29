

export function lintmsg(errors) {
    // try {
        
    
        var cssgenerated = ``;


        errors.forEach((error, index) => {
                console.log(error, "\\", errors)
                cssgenerated += `
                .cm-line:nth-of-type(${(error.line) + ""}) {
                    background-color: var(--cm-errorLineBg)!important;
                }
                .cm-gutterElement:nth-of-type(${(error.line + 1) + ""}) {
                    background-color: var(--cm-errorLineBg)!important;
                    color: var(--cm-error-gutter)!important;
                }
                .cm-line:nth-of-type(${(error.line) + ""})::after {
                    content: "         ${error.message}"!important;
                    position: absolute;
                    top: 0px;
                    color: var(--cm-error-gutter)!important;
                }
                .cm-gutterElement:nth-of-type(${(error.line + 1) + ""})::after {
                    content: "";
                    position: absolute;
                    right: 0px;
                    height: ${document.querySelector(".cm-line") ? document.querySelector(".cm-line").offsetHeight + "px" : "calc(var(--editor-font-size) + 1vh)"};
                    background-color: var(--cm-errorLineBg);
                    width: 30px;
                  }
                `;
        });
        
        console.log("CSS 1 > ", cssgenerated);
        
        
        var linterElement = document.getElementById("linter");
        
        linterElement.innerHTML = cssgenerated;
        
    // } catch(err) {
    //     return false;
    // }
}