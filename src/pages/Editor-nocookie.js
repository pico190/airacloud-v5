import React, { useEffect, useState } from "react";
import { encode, decode } from 'js-base64'
import CodeMirror from '@uiw/react-codemirror';

import { langs } from '@uiw/codemirror-extensions-langs';
import rainbowBrackets from 'rainbowbrackets'   
import { color } from '@uiw/codemirror-extensions-color';
import { indentationMarkers } from '@replit/codemirror-indentation-markers';
import { inlineSuggestion } from 'codemirror-extension-inline-suggestion';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';
import { airatheme } from "../utils/codemirror/airatheme";
import $ from 'jquery'
import { spaces, hexToRgb } from "../utils/generalfuncs";
import langLoader from "../utils/codemirror/langloader";

export function EditorNoCookie({ urlparsed }) {
    const [reference, setReference] = useState([]);
    const [intelliLoaded, setIntelliLoaded] = useState(false);
    const [initialValue, setinitialValue] = useState("");
    const [lang, setLang] = useState(null);
    const [extensionsarray, setExtensions] = useState(null);
    
    setInterval(() => {
            
        // Details
        Array.from(document.getElementsByClassName("cm-selectionBackground")).forEach(elem => { elem.style.setProperty('background', '#243047', 'important'); }) 
        Array.from(document.querySelectorAll('span[title="Fold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-down" alt="v" loading="lazy">`})
        Array.from(document.querySelectorAll('span[title="Unfold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-right" alt=">" loading="lazy">`})
        Array.from(document.querySelectorAll('.cm-selectionMatch')).forEach(elem => {spaces(elem.innerText) ? elem.classList.add("cm-spacematch") : elem.classList.remove("cm-spacematch")})
        
        document.querySelectorAll("span").forEach(span => {
            if(span.innerText===">") {
                var spanstyle = window.getComputedStyle(span);
                var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-meta'))
                var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
                if(cssvar === spanstyle.color) {
                    span.classList.add("cm-md-quote")
                }
            }
        })

    }, 1)

    // Format: https://airaurl/editor-nocookie/lang/base64editorcontent
    useEffect(() => {
        // urlparsed[1] => lang
        // urlparsed[2] => codigo base64 que es el contenido
        setLang(langLoader(urlparsed[1]))
        setinitialValue(decode(urlparsed[2]))
    }, [])

    // IntelliSense
    useEffect(() => {
        const loadIntelliSense = () => {
            if (!intelliLoaded) {
                setIntelliLoaded(true);
                    if (localStorage.getItem("htmlintelli")) {
                        setReference(JSON.parse(decode(localStorage.getItem("htmlintelli"))));
                    }
                    $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
                        setReference(data);
                        localStorage.setItem("htmlintelli", encode(JSON.stringify(data)))
                    });
            }
        };
        window.addEventListener("load", loadIntelliSense);
        return () => window.removeEventListener("load", loadIntelliSense);
    }, [intelliLoaded]);


    
    const fetchSuggestion = async (state) => {
        return '';
    };

    // Lang Updater
    useEffect(() => {
        if(lang === null) {
            setExtensions(
                [
                    hyperLink, 
                    color, 
                    indentationMarkers({
                        colors: {
                            light: '#00000024',
                            dark: '#FFFFFF24',
                            activeLight: '#0000004F',
                            activeDark: '#FFFFFF4F',
                        }
                    }),
                    rainbowBrackets(),
                    inlineSuggestion({ fetchFn: fetchSuggestion, delay: 1000, })
                ]
            )
        } else {
            setExtensions(
                [
                    lang,
                    hyperLink, 
                    color, 
                    indentationMarkers(),
                    rainbowBrackets(),
                    inlineSuggestion({ fetchFn: fetchSuggestion, delay: 1000, })
                ]
            )
        }
    }, [lang])

    const onChange = (val) => {
        window.history.pushState({}, null, "https://"+window.location.host+"/"+urlparsed[0]+"/"+urlparsed[1]+"/"+encode(val));
    };

    return (
        <>
                        <CodeMirror
                            extensions={extensionsarray}
                            value={initialValue}
                            theme={airatheme}
                            basicSetup={{ autocompletion: false }}
                            onChange={onChange}
                        />
        </>
    );
}
