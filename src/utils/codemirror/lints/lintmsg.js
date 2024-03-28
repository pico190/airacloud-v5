
export function lintmsg(errors) {
    Array.from(document.querySelector(".cm-content").children).forEach((line, index) => {
        errors.forEach(error => {
            if(error.line == index+1) {
                line.style.backgroundColor = "red"
                console.log(line.innerText)
            }
        })
    })
}