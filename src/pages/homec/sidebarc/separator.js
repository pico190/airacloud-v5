export function SideBarSeparator() {
    
    function loadSeparator() {
        separator.removeEventListener("mousedown");
        separator.removeEventListener("mouseup");
        var separator = document.getElementById("sb-separator");
        separator.addEventListener("mousedown", () => {
            alert("msex");
        })
        separator.addEventListener("mouseup", () => {
            alert("usex");
        })
    }

    setTimeout(() => {loadSeparator();}, 700)
    
    return <div id="sb-separator" className="sb-separator" onLoad={() => {loadSeparator();}} />
}