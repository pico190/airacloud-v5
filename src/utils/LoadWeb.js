export function LoadWeb({url}) {
    window.addEventListener("load", () => {
        var loadweb = document.getElementById("loadweb");
        setInterval(() => {
            if(loadweb.contentWindow.document.title==="AiraCloud v5") {
                window.location.href = "https://airacloud-v5.vercel.app/home/"
            }
        }, 10)
    })
    return (
        <iframe id="loadweb" style={{top: "0px", left: "0px", position:"fixed", border: "none", width: "100vw", height: "100vh"}} src={url} /> 
    )
}