
export function lintmsg(errors) {
    try {
        Array.from(document.querySelector(".cm-content").children).forEach((line, index) => {
            errors.forEach(error => {
                if(error.line == index+1) {
                    line.style.backgroundColor = "var(--cm-errorLineBg)"
                    console.log(line.innerText)
                }
            })
        })
    } catch(err) {
        return false;
    }
}