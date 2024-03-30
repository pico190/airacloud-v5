

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

                    var gutterTop = 0;
                    document.querySelectorAll(".cm-lineNumbers > .cm-gutterElement") ? document.querySelectorAll(".cm-lineNumbers > .cm-gutterElement").forEach((gutter, index) => {
                        if(parseInt(gutter.innerText) === error.line) {
                            cssgenerated += `
                            .cm-lineNumbers > .cm-gutterElement:nth-of-type(${(index + 1) + ""}) {
                                background-color: var(--cm-${type}LineBg)!important;
                                color: var(--cm-${type}-gutter)!important;
                            }
                            .cm-lineNumbers > .cm-gutterElement:nth-of-type(${(index + 1) + ""})::after {
                                content: "";
                                position: absolute;
                                right: 0px;
                                height: ${document.querySelector(".cm-line") ? document.querySelector(".cm-line").offsetHeight + "px" : "calc(var(--editor-font-size) + 1vh)"};
                                background-color: var(--cm-${type}LineBg);
                                width: 30px;
                              }
                            `;
                            gutterTop = gutter.offsetTop;
                        }     
                    }) : false
                    var lineNumbersSum = 1;
                    if(document.querySelector("cm-content") ? document.querySelector("cm-content").firstChild.classList.includes("cm-gap") : false) {
                        lineNumbersSum = 2
                    }
                    document.querySelectorAll(".cm-lineNumbers > .cm-gutterElement") ? document.querySelectorAll(".cm-lineNumbers > .cm-gutterElement").forEach((line, index) => {
                        if(line.offsetTop === gutterTop) {
                            cssgenerated += `
                            .cm-line:nth-of-type(${index + lineNumbersSum}) {
                                background-color: var(--cm-${type}LineBg)!important;
                            }
                            .cm-line:nth-of-type(${index + lineNumbersSum})::after {
                                content: "       ${error.message}"!important;
                                position: absolute;
                                top: 0px;
                                color: var(--cm-${type}-gutter)!important;
                            }
                            `;
                        }     
                    }) : false
                }
        });
        
        
        var linterElement = document.getElementById("linter") ? document.getElementById("linter") : null;
        
        linterElement ? linterElement.innerHTML = cssgenerated : false;
        
    // } catch(err) {
    //     return false;
    // }
}