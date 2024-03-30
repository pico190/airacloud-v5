export function loadIntelli() {
    var intellisense = document.getElementById("intellisense");

    var cursor = document.querySelector(".cm-cursor-primary");

    intellisense.innerHTML = "<h1>a</h1>";
    intellisense.style.left = cursor.offsetLeft + "px";
    intellisense.style.top = cursor.offsetTop + "px";

}