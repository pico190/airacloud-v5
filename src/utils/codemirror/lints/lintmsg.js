import { jsxtostr } from "../../generalfuncs"

export function lintmsg(errors) {
    try {
        Array.from(document.querySelector(".cm-content").children).forEach((line, index) => {
            errors.forEach(error => {
                if(error.line == index+1) {
                    
                    line.classList.add("errorline")
                    
                    console.log(line.innerText)
                }
            })
        })
        Array.from(document.querySelector(".cm-gutter").children).forEach((line, index) => {
            errors.forEach(error => {
                if(error.line == parseInt(line.innerText)) {
                    
                    line.classList.add("errorline")
                    line.classList.add("errorlinegutter")
                    
                    console.log(line.innerText)
                }
            })
        })
    } catch(err) {
        return false;
    }
}