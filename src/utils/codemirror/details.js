
import { spaces, hexToRgb } from "../generalfuncs";
import $ from 'jquery'

export function loadDetails() {
            var search = document.querySelector(".cm-search");
            
            // Obtener el padre común de los elementos
            
            // Obtener el siguiente hermano de elemento2
            
            // Mover elemento2 antes de elemento1
            
            // Mover elemento1 después del siguiente hermano de elemento2

            var next = search.querySelector('button[name=next]')
            var prev = search.querySelector('button[name=prev]')


            var pdr = next.parentNode;
            var sh = elemento2.nextSibling;
            pdr.insertBefore(prev, next);
            pdr.insertBefore(next, sh);

            search.querySelectorAll("button").forEach(button => {
                    
                
                    switch(button.name) {
                        case "next":
                            button.innerHTML = `<img width="20px" src="https://xploit.men/scdn/?fluenticons&name=arrow-down&fill=white&type=outline" alt="⬇" loading="lazy">`;
                            break;

                        case "prev":
                            button.innerHTML = `<img width="20px" src="https://xploit.men/scdn/?fluenticons&name=arrow-up&fill=white&type=outline" alt="⬆" loading="lazy">`;
                            break;

                        case "select":
                            button.style.display = "none";;
                            break;

                        case "replace":
                            button.innerHTML = `<img width="20px" src="https://xploit.men/scdn/?fluenticons&name=tab&fill=white" alt="⤴" loading="lazy">`;
                            break;


                        case "replaceAll":
                            button.innerHTML = `<img width="20px" src="https://xploit.men/scdn/?fluenticons&name=tabs&fill=white" alt="🔄" loading="lazy">`;
                            break;


                        case "close":
                            button.innerHTML = `<img width="20px" src="https://xploit.men/scdn/?fluenticons&name=dismiss&fill=white" alt="❌" loading="lazy">`;
                            break;


                    }
            })

            // Details
            // Array.from(document.getElementsByClassName("cm-selectionBackground")).forEach(elem => { elem.style.setProperty('background', '#243047', 'important'); }) 
            Array.from(document.querySelectorAll('span[title="Fold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-down" alt="v" class="foldicon" loading="lazy">`})
            Array.from(document.querySelectorAll('span[title="Unfold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-right" alt=">" class="foldicon foldclosed" loading="lazy">`})
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

            // Minimap
            if (navigator.userAgent.indexOf("Firefox") == -1) {
                var scrollbehavior = document.getElementById("scrollbehavior");
                
                $('.cm-minimap-overlay').mousedown(function() {
                    scrollbehavior.innerHTML = `
                    * {
                      --scroll-behavior: unset!important;
                    }
                    `
                });
                
                $('.cm-minimap-overlay').mouseup(function() {
                    scrollbehavior.innerHTML = `
                    * {
                      --scroll-behavior: smooth!important;
                    }`
                });
            } 

//             document.querySelectorAll("span").forEach(span => {
//                     var spanstyle = window.getComputedStyle(span);
//                     var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-bold'))
//                     var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
//                     if(cssvar === spanstyle.color) {
//                         span.classList.add("bold")
//                     }
//             })
            
//             document.querySelectorAll("span").forEach(span => {
//                     var spanstyle = window.getComputedStyle(span);
//                     var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-emphasis'))
//                     var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
//                     if(cssvar === spanstyle.color) {
//                         span.classList.add("cm-italic")
//                     }
//             })
}