

export function lintmsg(errors) {
    // try {
        
    
        var cssgenerated = ``;


        errors.forEach((error, index) => {
                console.log(error, "\\", errors)
                cssgenerated += `
                .cm-line:nth-of-type(${(error.line + 1) + ""})::before {
                    background-color: var(--cm-errorLineBg);
                }
                .cm-gutterElement:nth-of-type(${(error.line + 2) + ""})::before {
                    background-color: var(--cm-errorLineBg);
                }
                .cm-line:nth-of-type(${(error.line + 1) + ""})::after {
                    content: "         ${error.message}"!important;
                }`;
        });
        
        console.log("CSS 1 > ", cssgenerated);
        
        
        var linterElement = document.getElementById("linter");
        
        linterElement.innerHTML = cssgenerated;
        
    // } catch(err) {
    //     return false;
    // }
}