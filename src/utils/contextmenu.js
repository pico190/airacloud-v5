import { useMousePosition } from "./useMousePosition";
import { jsxtostr } from "./generalfuncs";
import React from 'react';

export function createContextMenu(e, contents) {
    e.preventDefault();

    const [
        mousePosition,
        setMousePosition
      ] = React.useState({ x: null, y: null });
      React.useEffect(() => {
        const updateMousePosition = ev => {
          setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
          window.removeEventListener('mousemove', updateMousePosition);
        };
      }, []);
    
    var contxtmenu = document.getElementById("contextmenu");
    contxtmenu.style.opacity = 1
    contxtmenu.style.pointerEvents = "all"
    contxtmenu.style.left = mousePosition.x + "px"
    contxtmenu.style.top = mousePosition.y + "px"
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