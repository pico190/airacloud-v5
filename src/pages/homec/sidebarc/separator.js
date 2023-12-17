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

    let m = 0

    setTimeout(() => {m +=1; loadSeparator(); alert(m)}, 700)
    
    return <div id="sb-separator" className="sb-separator" />
}