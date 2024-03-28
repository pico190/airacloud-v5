import { jsxtostr } from "../../generalfuncs"

export function lintmsg(errors) {
    try {
        Array.from(document.querySelector(".cm-content").children).forEach((line, index) => {
            errors.forEach(error => {
                if(error.line == index+1) {
                    var editorcontainer = document.querySelector(".editorcontainer")
                    
                    editorcontainer.innerHTML = editorcontainer.innerHTML + jsxtostr(
                        <div 
                            style={{ 
                                position: "absolute", 
                                backgroundColor: "var(--cm-errorLineBg)",
                                width: "100%",
                                height: line.offsetHeight + "px",
                                left: "0px",
                                top: line.offsetTop + "px"
                            }} 
                        />
                    )
                    console.log(line.innerText)
                }
            })
        })
    } catch(err) {
        return false;
    }
}