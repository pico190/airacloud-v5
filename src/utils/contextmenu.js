import { useMousePosition } from "./useMousePosition";
import { jsxtostr } from "./generalfuncs";

const mousePosition = useMousePosition();

export function createContextMenu(contents) {
    
    var contxtmenu = document.getElementById("contextmenu");
    contxtmenu.style.left = mousePosition.x + "px"
    contxtmenu.style.top = mousePosition.y + "px"
    contxtmenu.style.opacity = 1
    contxtmenu.style.pointerEvents = "all"
    contxtmenu.innerHTML =  jsxtostr(contents)

    document.addEventListener('click', (event) => {
        if (!contxtmenu.contains(event.target)) {
            contxtmenu.style.opacity = 0
            contxtmenu.style.pointerEvents = "none"
        }
    });
}

export function CmenuElement({icon, title, action, desc}) {
    return (
        <div class="contextmenuelement" onClick={() => {action()}} title={desc}>
            <img src={icon} loading="lazy" alt="" style={{width: "20px"}} /> 
            {title}
        </div>
    )
}