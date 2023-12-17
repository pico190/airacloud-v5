export function SideBarSeparator() {
    
    function loadSeparator() {
        var separator = document.getElementById("sb-separator");
        separator.removeEventListener("mousedown");
        separator.removeEventListener("mouseup");
        setTimeout(() => {
            separator.addEventListener("mousedown", () => {
                alert("msex");
            })
            separator.addEventListener("mouseup", () => {
                alert("usex");
            })
        }, 10)
    }

    setTimeout(() => {loadSeparator();}, 700)
    
    return <div id="sb-separator" className="sb-separator" onLoad={() => {loadSeparator();}} />
}