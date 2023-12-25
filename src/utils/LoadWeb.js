export function LoadWeb({url}) {
    window.addEventListener("load", () => {
        var loadweb = document.getElementById("loadweb");
        setInterval
    })
    return (
        <iframe id="loadweb" style={{top: "0px", left: "0px", position:"fixed", border: "none", width: "100vw", height: "100vh"}} src={url} /> 
    )
}