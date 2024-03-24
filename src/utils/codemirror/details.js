
import { spaces, hexToRgb } from "../generalfuncs";

export function loadDetails() {
            // Details
            // Array.from(document.getElementsByClassName("cm-selectionBackground")).forEach(elem => { elem.style.setProperty('background', '#243047', 'important'); }) 
            Array.from(document.querySelectorAll('span[title="Fold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-down" alt="v" loading="lazy">`})
            Array.from(document.querySelectorAll('span[title="Unfold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-right" alt=">" loading="lazy">`})
            Array.from(document.querySelectorAll('.cm-selectionMatch')).forEach(elem => {spaces(elem.innerText) ? elem.classList.add("cm-spacematch") : elem.classList.remove("cm-spacematch")})
            
            document.querySelectorAll("span").forEach(span => {
                if(span.innerText===">") {
                    var spanstyle = window.getComputedStyle(span);
                    var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-meta'))
                    var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
                    if(cssvar === spanstyle.color) {
                        span.classList.add("cm-md-quote")
                    }
                }
            })

            document.querySelectorAll("span").forEach(span => {
                    var spanstyle = window.getComputedStyle(span);
                    var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-bold'))
                    var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
                    if(cssvar === spanstyle.color) {
                        span.classList.add("bold")
                    }
            })
            
            document.querySelectorAll("span").forEach(span => {
                    var spanstyle = window.getComputedStyle(span);
                    var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-emphasis'))
                    var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
                    if(cssvar === spanstyle.color) {
                        span.classList.add("cm-italic")
                    }
            })
}