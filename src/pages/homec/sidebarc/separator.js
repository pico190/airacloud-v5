export function SideBarSeparator() {
    
    function loadSeparator() {
        var separator = document.getElementById("sb-separator");
        separator.addEventListener("dragstart", () => {
            alert("sex")
        })
    }
    
    return <div id="sb-separator" draggable className="sb-separator" onload={() => {loadSeparator()}} />
}