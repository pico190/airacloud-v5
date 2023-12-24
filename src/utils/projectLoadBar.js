export function projectLoadBar() {

    document.body.innerHTML = document.body.innerHTML + '<div id="airaloadbar" style="left: 100vw;"><h1>sex</h1></div>'
    var airaloadbar = document.getElementById("airaloadbar");
    var root = document.getElementById("root");
    root.style.left = "0vw";
    setTimeout(() => {
        airaloadbar.style.root = "-100vw";
        airaloadbar.style.left = "0vw";
    }, 200)

}