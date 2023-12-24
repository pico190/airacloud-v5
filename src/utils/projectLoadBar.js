export function projectLoadBar() {

    document.body.innerHTML = document.body.innerHTML + '<div id="airaloadbar" style="left: 100vw;"><img src="https://airacloud-v5.vercel.app/favicon.ico" alt="" loading="lazy"><h1>AiraCloud</h1></div>'
    var airaloadbar = document.getElementById("airaloadbar");
    var root = document.getElementById("root");
    root.style.left = "0vw";
    root.style.position = "fixed";
    setTimeout(() => {
        root.style.left = "-100vw";
        airaloadbar.style.left = "0vw";
    }, 200)

}