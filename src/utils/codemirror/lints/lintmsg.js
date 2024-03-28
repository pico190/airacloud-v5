import { jsxtostr } from "../../generalfuncs"

export function lintmsg(errors) {
    try {
        Array.from(document.querySelector(".cm-content").children).forEach((line, index) => {
            errors.forEach(error => {
                if(error.line == index+1) {
                    var errorline = document.getElementById("errorline");

                    errorline.style.top = line.offsetTop + "px";
                    errorline.style.height = line.offsetHeight + "px"
                    
                    console.log(line.innerText)
                }
            })
        })
    } catch(err) {
        return false;
    }
}