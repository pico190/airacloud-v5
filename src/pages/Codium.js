// ________  ___  ________  ________  ________  ___       ________  ___  ___  ________          ___      ___ ________      
// |\   __  \|\  \|\   __  \|\   __  \|\   ____\|\  \     |\   __  \|\  \|\  \|\   ___ \        |\  \    /  /|\   ____\     
// \ \  \|\  \ \  \ \  \|\  \ \  \|\  \ \  \___|\ \  \    \ \  \|\  \ \  \\\  \ \  \_|\ \       \ \  \  /  / | \  \___|_    
//  \ \   __  \ \  \ \   _  _\ \   __  \ \  \    \ \  \    \ \  \\\  \ \  \\\  \ \  \ \\ \       \ \  \/  / / \ \_____  \   
//   \ \  \ \  \ \  \ \  \\  \\ \  \ \  \ \  \____\ \  \____\ \  \\\  \ \  \\\  \ \  \_\\ \       \ \    / /   \|____|\  \  
//    \ \__\ \__\ \__\ \__\\ _\\ \__\ \__\ \_______\ \_______\ \_______\ \_______\ \_______\       \ \__/ /      ____\_\  \ 
//     \|__|\|__|\|__|\|__|\|__|\|__|\|__|\|_______|\|_______|\|_______|\|_______|\|_______|        \|__|/      |\_________\
//                                                                                                              \|_________|

// CODIUM - VSCODE WEB LIKE VERSION - WITH AIRACLOUD TECH
      
//                      ///////////////////////////////////////////////
//                      //                LIBRARIES                  //
//                      ///////////////////////////////////////////////

//                                  --- IMPORTANT LIBRARIES ---
//     IMPORTS ---------------------------------------------------  LIBRARY --------------------     
import                                                                   "./codiumc/Codium.css"; // CSS  
import React, {  useEffect, useState  }                             from "react"               ; // React                                  
import { console_info                 }                             from "../utils/Console";

//                                       --- PAGES & UI ---
//     IMPORTS ---------------------------------------------------  LIBRARY --------------------
import Toolbar                                                      from "./codiumc/toolbar" ; // Toolbar
import CodiumNotFound                                               from "./codiumc/notfound"; // Notfound page
import Files                                                        from "./codiumc/files.js"; // Files page




export function Codium({ urlparsed }) {

    var [ windowpage, setWindowpage       ] = useState(""   ); // WINDOW HASH = WINDOW PAGE
    var [ DOMContent, setDomContent       ] = useState(<></>); // DOM CONTENT - CODIUM

    window.addEventListener("DOMContentLoaded", () => {
        var title = document.querySelector("title");
        var logo = document.querySelector('link[rel="icon"]');

        title.innerHTML = "AiraCloud Codium";
        logo.href = "/codium.svg";
    })
  
    setInterval(() => {
        setWindowpage(window.location.hash.replace("#", ""));
    }, 1);

    useEffect(() => {
        console_info("Window: "+windowpage)
        switch (windowpage) {
            case "files":
                setDomContent(<>
                 <Files/>
                </>);
                break;
            case "settings":
                setDomContent(<CodiumNotFound />)
                break;
            default:
               setDomContent(<CodiumNotFound />)
               break;
        }

    }, [windowpage])
    
    return (
        <>
                        <svg style={{display: "none"}} id="svgroundcorner">

                            <defs>
                                <filter id="selection-goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
                                                                                0 1 0 0 0  
                                                                                0 0 1 0 0  
                                                                                0 0 0 19 -9" result="goo"></feColorMatrix>
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                                </filter>
                            </defs>

                        </svg>
                        <Toolbar />
                        {DOMContent}

                        {/* <CodeMirror
                            className="editorcontainer"
                            extensions={extensionsarray}
                            value={initialValue}
                            onCreateEditor={mount}
                            theme={airatheme}
                            basicSetup={{}}
                            onChange={onChange}
                            onUpdate={onUpdate}
                            style={{
                                height: "100%",
                                width: "100%"
                            }}
                        /> */}
                        {/* <div id="errorline" 
                            style={{ 
                                position: "absolute", 
                                backgroundColor: "var(--cm-errorLineBg)",
                                width: "100%",
                                height: "0px",
                                left: "0px",
                                top: "0px",
                                transitionDuration: "0ms",
                                pointerEvents: "none"
                            }} 
                            /> */}
        </>
    );
}
