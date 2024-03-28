import { jsxtostr } from "../../generalfuncs"

export function lintmsg(errors) {
    try {
        Array.from(document.querySelector(".cm-content").children).forEach((line, index) => {
            
            line.classList.remove("errorline")
            errors.forEach(error => {
                if(error.line == index+1) {
                    
                    line.classList.add("errorline")
                    
                }
            })
        })
        Array.from(document.querySelector(".cm-gutter").children).forEach((line, index) => {
            
            line.classList.remove("errorline")
            line.classList.remove("errorlinegutter")
            
            errors.forEach(error => {
                if(error.line == parseInt(line.innerText)) {
                    
                    line.classList.add("errorline")
                    line.classList.add("errorlinegutter")
                    
                }
            })
        })
    } catch(err) {
        return false;
    }
}