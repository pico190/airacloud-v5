export function SideBarSeparator() {
    
    function loadSeparator() {
        var separator = document.getElementById("sb-separator");
        
        function mousedown() {
            alert("msex");
        }
        function mouseup() {
            alert("usex");
        }

        separator.removeEventListener("mousedown", mousedown);
        separator.removeEventListener("mouseup", mouseup);
        
            separator.addEventListener("mousedown", mousedown)
            separator.addEventListener("mouseup", mouseup)
    }

    setTimeout(() => {loadSeparator();}, 700)
    
    return <div id="sb-separator" className="sb-separator" onLoad={() => {loadSeparator();}} />
}