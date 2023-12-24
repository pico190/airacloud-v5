export function projectLoadBar(projectName) {

    document.body.innerHTML = document.body.innerHTML + '<div id="airaloadbar" style="left: 100vw;"><font><img src="https://airacloud-v5.vercel.app/favicon.ico" alt="" loading="lazy"><h1>AiraCloud</h1></font><span id="loadingProtip"></span></div>'
    var airaloadbar = document.getElementById("airaloadbar");
    var root = document.getElementById("root");
    root.style.left = "0vw";
    root.style.position = "fixed";
    setTimeout(() => {
        root.style.left = "-100vw";
        airaloadbar.style.left = "0vw";
    }, 200)

    // Pro Tips
    var protips = ["This is a pro tip", "I like carrot", "Join my minecraft server chorizosmp.enderman.cloud", "Anal sex"]
    var firstphrase = "Loading your project, <b>"+projectName+"</b>...";
    var span = document.getElementById("loadingProtip");
    span.innerHTML = firstphrase
    setTimeout(() => {
            setInterval(() => {
                var protip = protips[Math.floor(Math.random() * protips.length)];
                span.innerHTML = protip;
            }, 1000)
    }, 500)
}