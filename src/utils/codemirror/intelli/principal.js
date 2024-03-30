export function loadIntelli(intelli) {
    var intellisense = document.getElementById("intellisense");

    var cursor = document.querySelector(".cm-cursor-primary");

    

    intellisense.innerHTML = "<h1>a</h1>";
    intellisense.style.left = (cursor.offsetLeft - 3) + "px";
    intellisense.style.top = (cursor.offsetTop - 20) + "px";

}