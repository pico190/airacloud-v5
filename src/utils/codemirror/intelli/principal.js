import { nearElem } from "../../generalfuncs";

export function loadIntelli(editorToken) {
    var intellisense = document.getElementById("intellisense");

    var editor = document.querySelector(".cm-editor")
    var cursor = document.querySelector(".cm-cursor-primary");

    if(editor) {
        if(editor.classList.contains("cm-focused")) {

            var elementsline = document.querySelector(".cm-activeLine").querySelectorAll('[class*="ͼ"]')
            
            intellisense.innerHTML = ``;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.style.left = (cursor.getBoundingClientRect().left - 3) + "px";
            intellisense.style.top = (cursor.getBoundingClientRect().top - 20) + "px";
        
        } else {
            intellisense.innerHTML = ""
        }
    }
}