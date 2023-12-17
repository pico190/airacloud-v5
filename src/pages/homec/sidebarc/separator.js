export function SideBarSeparator() {
    
    function loadSeparator() {
        var separator = document.getElementById("sb-separator");
        separator.addEventListener("mousedown", () => {
            alert("msex");
        })
        separator.addEventListener("mouseup", () => {
            alert("usex");
        })
    }
    
    return <div id="sb-separator" className="sb-separator" onload={() => {loadSeparator()}} />
}