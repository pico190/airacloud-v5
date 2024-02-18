import { useMousePosition } from "./useMousePosition";
import { jsxtostr } from "./generalfuncs";


export function ContextMenu({children, cmenucontent}) {
    
    //<div id="contextmenu" className="contextmenu" />
    var contxtmenu = document.getElementById("contextmenu");
    const mousePosition = useMousePosition();

    function eventcmenu(e) {
        e.preventDefault();
        contxtmenu.style.opacity = 1
        contxtmenu.style.pointerEvents = "all"
        contxtmenu.style.left = mousePosition.x + "px"
        contxtmenu.style.top = mousePosition.y + "px"
        contxtmenu.innerHTML = jsxtostr(cmenucontent)
    }

    // document.addEventListener('contextmenu', (event) => {
    //     if (!contxtmenu.contains(event.target)) {
    //         contxtmenu.style.opacity = 0
    //         contxtmenu.style.pointerEvents = "none"
    //     }
    // });

    document.addEventListener('click', (event) => {
        if (!contxtmenu.contains(event.target)) {
            contxtmenu.style.opacity = 0
            contxtmenu.style.pointerEvents = "none"
        }
    });

    return (
        <>
        <span onContextMenu={(e) => {eventcmenu(e)}}>
            {children}
        </span>
        </>
    )
}

export function CmenuElement({icon, title, action, desc}) {
    return (
        <div class="contextmenuelement" onClick={() => {action()}} title={desc}>
            <img src={icon} loading="lazy" alt="" style={{width: "20px"}} /> 
            {title}
        </div>
    )
}