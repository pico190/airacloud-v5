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
import { loadDetails } from "../utils/codemirror/details";
import { showMinimap } from "@replit/codemirror-minimap"

import { vscodeKeymap } from "@replit/codemirror-vscode-keymap";
import { keymap } from '@codemirror/view';

export function EditorNoCookie({ urlparsed }) {
    const [reference, setReference] = useState([]);
    const [intelliLoaded, setIntelliLoaded] = useState(false);
    const [initialValue, setinitialValue] = useState("");
    const [lang, setLang] = useState(null);
    const [extensionsarray, setExtensions] = useState(null);
    
    setInterval(() => {
        loadDetails();
    }, 1)

    // Format: https://airaurl/editor-nocookie/lang/base64editorcontent
    useEffect(() => {
        // urlparsed[1] => lang
        // urlparsed[2] => codigo base64 que es el contenido
        setLang(langLoader(urlparsed[1], langs))
        var value;
        var errormsg = "Base64 Decoding Error"
        try {
            value = decode(urlparsed[2] ? urlparsed[2] : encode(errormsg))
        } catch(err) {
            value = errormsg
        }
        setinitialValue(value)
    }, [urlparsed])

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

    let createMinimap = () => {
        const dom = document.createElement('div');
        return { dom }
      }
      
    // Lang Updater
    useEffect(() => {
        if(lang === null) {
            setExtensions(
                [
                    hyperLink, 
                    color, 
                    keymap.of(vscodeKeymap),
                    indentationMarkers(),
                    showMinimap.compute(['doc'], (state) => {
                        return {
                        create: createMinimap,
                        displayText: 'characters',
                        showOverlay: 'mouse-over',
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
                    keymap.of(vscodeKeymap),
                    showMinimap.compute(['doc'], (state) => {
                        return {
                            create: createMinimap,
                            displayText: 'characters',
                            showOverlay: 'mouse-over'
                        }
                    }),
                    indentationMarkers(),
                    rainbowBrackets(),
                    inlineSuggestion({ fetchFn: fetchSuggestion, delay: 1000, })
                ]
            )
        }
    }, [lang])

    const onChange = (val) => {
        window.history.pushState({}, null, "https://"+window.location.host+"/"+urlparsed[0]+"/"+urlparsed[1]+"/"+encode(val));
        window.parent.postMessage(val, "*");
    };

    const mount = (view, state) => { 
        document.getElementById("loader").style.opacity = 0; 
        document.getElementById("loader").style.pointerEvents = "none" 
        console.log(view, "|", state);
    };
    
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
                        <style children="* {--editor-font-size: 2vw;} .editorcontainer {border: none;
  border-radius: 0px !important;
  -webkit-border-radius: 0px !important;
  -moz-border-radius: 0px !important;
  -ms-border-radius: 0px !important;
  -o-border-radius: 0px !important;}" />
                        <style id="langstyle" />
                        <style id="scrollbehavior" />
                        <img onClick={() => {window.open("https://"+window.location.host+"/", "_blank");}} className="editor-nocookie-watermark" src={`https://${window.location.host}/favicon.ico`} loading="lazy" alt="AiraCloud" />
                        <CodeMirror
                            className="editorcontainer"
                            extensions={extensionsarray}
                            value={initialValue}
                            onCreateEditor={mount}
                            theme={airatheme}
                            basicSetup={{ autocompletion: false }}
                            onChange={onChange}
                            style={{
                                height: "100%",
                                width: "100%"
                            }}
                        />
        </>
    );
}
