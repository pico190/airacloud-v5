import { nearElem } from "../../generalfuncs";

export function loadIntelli(intelli) {
    var intellisense = document.getElementById("intellisense");

    var editor = document.querySelector(".cm-editor")
    var cursor = document.querySelector(".cm-cursor-primary");

    if(editor.classList.contains("cm-focused")) {

        var elementsline = document.querySelector(".cm-activeLine").querySelectorAll('[class*="ͼ"]')
        var editorToken = nearElem(elementsline, cursor)
        console.log(elementsline)
    
        intellisense.innerHTML = "<h1>"+editorToken.innerText+"</h1>";
        intellisense.style.left = (cursor.getBoundingClientRect().left - 3) + "px";
        intellisense.style.top = (cursor.getBoundingClientRect().top - 20) + "px";
    
    } else {
        intellisense.innerHTML = ""
    }
}