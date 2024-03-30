import { nearElem } from "../../generalfuncs";

export function loadIntelli(intelli) {
    var intellisense = document.getElementById("intellisense");

    var cursor = document.querySelector(".cm-cursor-primary");

    var elementsline = document.querySelector(".cm-activeLine").querySelectorAll('[class*="ͼ"]')
    var editorToken = nearElem(elementsline, cursor)
    console.log(elementsline)

    intellisense.innerHTML = "<h1>"+editorToken.innerText+"</h1>";
    intellisense.style.left = (cursor.getBoundingClientRect().left - 3) + "px";
    intellisense.style.top = (cursor.getBoundingClientRect().top - 20) + "px";

}