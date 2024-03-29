

export function lintmsg(errors) {
    // try {
        
    
        var cssgenerated = ``;


        errors.forEach((error, index) => {
                var ignorefilters = ["Expected RBRACE at"];
                var stop = false;

                ignorefilters.forEach(filter => {
                    if(error.message.includes(filter)) {
                        stop = true;
                    }
                })
                if(!stop) {

                    var type = "error"
                    if(error.type === "warning") {
                        type = "warn"
                    }

                    document.querySelectorAll(".cm-lineNumbers > .cm-gutterElement").forEach((gutter, index) => {
                        if(parseInt(gutter.innerText) === error.line) {
                            cssgenerated += `
                            .cm-lineNumbers > .cm-gutterElement:nth-of-type(${(index + 2) + ""}) {
                                background-color: var(--cm-${type}LineBg)!important;
                                color: var(--cm-${type}-gutter)!important;
                            }
                            .cm-lineNumbers > .cm-gutterElement:nth-of-type(${(index + 2) + ""})::after {
                                content: "";
                                position: absolute;
                                right: 0px;
                                height: ${document.querySelector(".cm-line") ? document.querySelector(".cm-line").offsetHeight + "px" : "calc(var(--editor-font-size) + 1vh)"};
                                background-color: var(--cm-${type}LineBg);
                                width: 30px;
                              }
                            `;
                        }     
                    })
                    document.querySelectorAll(".cm-lineNumbers > .cm-gutterElement").forEach((line, index) => {
                        if(parseInt(gutter.innerText) === error.line) {
                            cssgenerated += `
                            .cm-line:nth-of-type(${index + 1}) {
                                background-color: var(--cm-${type}LineBg)!important;
                            }
                            .cm-line:nth-of-type(${index + 1})::after {
                                content: "       ${error.message}"!important;
                                position: absolute;
                                top: 0px;
                                color: var(--cm-${type}-gutter)!important;
                            }
                            `;
                        }     
                    })
                }
        });
        
        
        var linterElement = document.getElementById("linter");
        
        linterElement.innerHTML = cssgenerated;
        
    // } catch(err) {
    //     return false;
    // }
}