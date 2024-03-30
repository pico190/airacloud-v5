import { nearElem } from "../../generalfuncs";

export function loadIntelli(intelli) {
    var intellisense = document.getElementById("intellisense");

    var cursor = document.querySelector(".cm-cursor-primary");

    var editorToken = nearElem(document.querySelector(".cm-activeLine").querySelectorAll("*"), cursor)

    intellisense.innerHTML = "<h1>"+editorToken.innerText+"</h1>";
    intellisense.style.left = (cursor.offsetLeft - 3) + "px";
    intellisense.style.top = (cursor.offsetTop - 20) + "px";

}