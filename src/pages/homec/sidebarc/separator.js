export function SideBarSeparator() {
    
        let m = 0;
        let separatorInitialized = false;
        
        function loadSeparator() {
            const separator = document.getElementById("sb-separator");
        
            function mousedown() {
                alert("m");
            }
        
            function mouseup() {
                alert("u");
            }
        
            separator.addEventListener("mousedown", mousedown);
            separator.addEventListener("mouseup", mouseup);
        
            separatorInitialized = true; // Marcamos que el separador ha sido inicializado
        }
        
        const cambiarVariable = () => {
            m += 1;
            if (m === 1 && !separatorInitialized) { // Verificamos si m es igual a 1 y si el separador no ha sido inicializado
                loadSeparator();
                alert("a");
            }
            alert(m);
        };
        
        setTimeout(cambiarVariable, 700);
        
    return <div id="sb-separator" className="sb-separator" />
}