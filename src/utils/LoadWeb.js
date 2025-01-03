export function LoadWeb({url}) {
    window.addEventListener("load", () => {
        var loadweb = document.getElementById("loadweb");
        setInterval(() => {
            if(loadweb.contentWindow.document.title==="AiraCloud v5") {
                window.location.href = "https://"+window.location.host+"/home/";
                loadweb.style.display = "none";
                loadweb.remove();
            }
        }, 10)
    })
    return (
        <iframe id="loadweb" title="loadweb" style={{top: "0px", left: "0px", position:"fixed", border: "none", width: "100vw", height: "100vh"}} src={url} /> 
    )
}