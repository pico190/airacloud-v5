export function SideBarSeparator() {
    

function loadSeparator() {

    if (!localStorage.getItem('separatorInitialized')) {
        localStorage.setItem('separatorInitialized', true);
        setTimeout(() => {
            window.location.reload();
        }, 450)

        const separator = document.getElementById("sb-separator");

        function mousedown() {
            alert("m");
        }
    
        function mouseup() {
            alert("u");
        }
    
        separator.addEventListener("mousedown", mousedown);
        separator.addEventListener("mouseup", mouseup);
    
    }
}


loadSeparator();

return <div id="sb-separator" className="sb-separator" />;
}