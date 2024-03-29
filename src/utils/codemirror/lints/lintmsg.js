

export function lintmsg(errors) {
    // try {
        
    
        var cssgenerated = ``;


        errors.forEach((error, index) => {
                console.log(error, "\\", errors)
                var type = "error"
                if(error.type === "warn") {
                    type = "warn"
                }
                cssgenerated += `
                .cm-line:nth-of-type(${(error.line) + ""}) {
                    background-color: var(--cm-${type}LineBg)!important;
                }
                .cm-gutterElement:nth-of-type(${(error.line + 1) + ""}) {
                    background-color: var(--cm-${type}LineBg)!important;
                    color: var(--cm-${type}-gutter)!important;
                }
                .cm-line:nth-of-type(${(error.line) + ""})::after {
                    content: "         ${error.message}"!important;
                    position: absolute;
                    top: 0px;
                    color: var(--cm-${type}-gutter)!important;
                }
                .cm-gutterElement:nth-of-type(${(error.line + 1) + ""})::after {
                    content: "";
                    position: absolute;
                    right: 0px;
                    height: ${document.querySelector(".cm-line") ? document.querySelector(".cm-line").offsetHeight + "px" : "calc(var(--editor-font-size) + 1vh)"};
                    background-color: var(--cm-${type}LineBg);
                    width: 30px;
                  }
                `;
        });
        
        
        var linterElement = document.getElementById("linter");
        
        linterElement.innerHTML = cssgenerated;
        
    // } catch(err) {
    //     return false;
    // }
}