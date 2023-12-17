export function SideBarSeparator() {
    
    function loadSeparator() {
        var separator = document.getElementById("sb-separator");
        
        function mousedown() {
            alert("msex");
        }
        function mouseup() {
            alert("usex");
        }
            separator.addEventListener("mousedown", mousedown)
            separator.addEventListener("mouseup", mouseup)
    }

    let m = 0;

    const cambiarVariable = () => {
        m += 1;
        if(m===1) {
            loadSeparator();
            alert("asex")
        }
        alert(m)
    };

    setTimeout(() => { cambiarVariable(); }, 700);

    return <div id="sb-separator" className="sb-separator" />
}