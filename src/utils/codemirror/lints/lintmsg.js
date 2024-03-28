import { jsxtostr } from "../../generalfuncs"

export function lintmsg(errors) {
    try {
        console.log(errors);
        Array.from(document.querySelector(".cm-content").children).forEach((line, index) => {
            
            errors.forEach(error => {
                if(error.line == index+1) {
                    
                    line.classList.add("errorline")
                    
                } else {
                    
                    line.classList.remove("errorline")
                }
            })
        })
        Array.from(document.querySelector(".cm-gutter").children).forEach((line, index) => {
            
            errors.forEach(error => {
                if(error.line == parseInt(line.innerText)) {
                    
                    line.classList.add("errorline")
                    line.classList.add("errorlinegutter")
                    
                } else {
                    
                    line.classList.remove("errorline")
                    line.classList.remove("errorlinegutter")
                }
            })
        })
    } catch(err) {
        return false;
    }
}