export function SideBarSeparator() {
    
let separatorInitialized = false; // Variable global

function loadSeparator() {
  const separator = document.getElementById("sb-separator");

  function mousedown() {
    alert("m");
  }

  function mouseup() {
    alert("u");
  }

  if (!separatorInitialized) {
    separator.addEventListener("mousedown", mousedown);
    separator.addEventListener("mouseup", mouseup);

    separatorInitialized = true; // Marcamos que el separador ha sido inicializado
  }
}

loadSeparator();

return <div id="sb-separator" className="sb-separator" />;}