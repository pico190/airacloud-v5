export function projectLoadBar(projectName) {

    document.body.innerHTML = document.body.innerHTML + '<div id="airaloadbar" style="left: 100vw;"><font><img src="https://'+window.location.host+'/favicon.ico" alt="" loading="lazy"><h1>AiraCloud</h1></font><span id="loadingProtip"></span></div>'
    var airaloadbar = document.getElementById("airaloadbar");
    var root = document.getElementById("root");
    root.style.left = "0vw";
    root.style.position = "fixed";
    setTimeout(() => {
        root.style.left = "-100vw";
        airaloadbar.style.left = "0vw";
    }, 200)

    // Pro Tips
    var protips = ["This is a pro tip", "I like carrot", "Optix is obtuse", "AiraCloud v6 cominj sun"]
    var firstphrase = "Loading your project, <b>"+projectName+"</b>...";
    var span = document.getElementById("loadingProtip");
    span.innerHTML = firstphrase
    function loadProtip() {
        var protip = protips[Math.floor(Math.random() * protips.length)];
        span.innerHTML = protip;
    }
    setTimeout(() => {
        loadProtip();
    }, 4000)
    setInterval(() => {
        loadProtip();
    }, 7000)
}
