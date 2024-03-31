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
import { lintmsg } from "../utils/codemirror/lints/lintmsg";
import { vscodeKeymap } from "@replit/codemirror-vscode-keymap";
import { keymap } from '@codemirror/view';
import { console_info, console_warn, console_group } from "../utils/Console";
import phpLinter from "../utils/codemirror/lints/php";
import cssLinter from "../utils/codemirror/lints/css";
import jsLinter from "../utils/codemirror/lints/js";
import {CompletionContext} from "@codemirror/autocomplete"
import { loadIntelli } from "../utils/codemirror/intelli/principal";
import { saveToCache, retrieveFromCache } from "../utils/cache";

export function EditorNoCookie({ urlparsed }) {
    const [reference, setReference] = useState([]);
    const [intelliLoaded, setIntelliLoaded] = useState(false);
    const [initialValue, setinitialValue] = useState("");
    const [lang, setLang] = useState(null);
    const [extensionsarray, setExtensions] = useState(null);

    // Format: https://airaurl/editor-nocookie/lang/base64editorcontent
    useEffect(() => {
        // urlparsed[1] => lang
        // urlparsed[2] => codigo base64 que es el contenido
        setLang(langLoader(urlparsed[1], langs))
        var value;
        var errormsg = "Base64 Decoding Error"
        try {
            value = decode(urlparsed[2] ? urlparsed[2] : encode(errormsg))
            console_group("B64 Editor Content Loaded");
            console.log(value);
            console.groupEnd();
        } catch(err) {
            console_warn("Error loading B64 Editor content");
            value = errormsg
        }
        setinitialValue(value)
    }, [urlparsed])

    // IntelliSense
    useEffect(() => {
        const loadIntelliSense = () => {
            if (!intelliLoaded) {
                try {
                    var htmlintelli = ["php", "html", "jsx", "javascript"];
                    if(htmlintelli.includes(document.querySelector(".cm-content").getAttribute("data-language"))) {
                        setIntelliLoaded(true);
                        retrieveFromCache('/intellisense-html.txt')
                            .then(function(response) {
                                if (response) {
                                    setReference(JSON.parse(decode(response)));
                                } else { 
                                    $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
                                        saveToCache('/intellisense-html.txt', encode(JSON.stringify(data)))
                                        .then(function() {
                                          console.log('Archivo guardado en caché');
                                        })
                                        .catch(function(error) {
                                          console.error('Error al guardar en caché:', error);
                                        });    
                                        setReference(data);
                                    });
                                }
                            })
                            .catch(function(error) {
                                console.error('Error al obtener de caché:', error);
                            });
                        console_info("HTML IntelliSense Loaded");
                    }
                } catch(err) {
                    return true;
                }
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

      var [ minimaplines, setMinimapLines ] = useState([])
      

      
    // Lang Updater
    useEffect(() => {
        if(lang === null) {
            console_info("Extensions Loaded")
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
                        gutters: minimaplines
                        }
                    }),
                    rainbowBrackets(),
                    inlineSuggestion({ fetchFn: fetchSuggestion, delay: 1000, })
                ]
            )
        } else {
            console_info("Extensions Loaded")
            setExtensions(
                [
                    lang,
                    hyperLink, 
                    color, 
                    keymap.of(vscodeKeymap),
                    indentationMarkers(),
                    showMinimap.compute(['doc'], (state) => {
                        return {
                            create: createMinimap,
                            displayText: 'characters',
                            showOverlay: 'mouse-over',
                            gutters: minimaplines
                        }
                    }),
                    rainbowBrackets(),
                    inlineSuggestion({ fetchFn: fetchSuggestion, delay: 1000, })
                ]
            )
        }
    }, [lang])

    const [errors, setErrors] = useState([]);
  

    useEffect(() => {
      console.log("Errors detected:", errors);
      lintmsg(errors, setMinimapLines);
    }, [errors]);
  
  
    setInterval(() => {
        loadDetails();
        loadIntelli();
      }, 1);

    function lint(val) {
        function editorislang(array) {
            return array.includes(document.querySelector(".cm-content").getAttribute("data-language"))
        }
        var phplint = ["php"];
        if(editorislang(phplint)) {
            phpLinter(val, setErrors);
        }
        var csslint = ["css", "less"];
        if(editorislang(csslint)) {
            cssLinter(val, setErrors);
        }
        var jslint = ["js", "jsx", "javascript"];
        if(editorislang(jslint)) {
            jsLinter(val, setErrors);
        }

        
    }

    const onChange = (val) => {
        setErrors([])
        window.history.pushState({}, null, "https://"+window.location.host+"/"+urlparsed[0]+"/"+urlparsed[1]+"/"+encode(val));
        window.parent.postMessage(val, "*");

        lint(val);

    };
    const onUpdate = () => {
        lintmsg(errors);
    };

    const mount = (view, state) => { 
        document.getElementById("loader").style.opacity = 0; 
        document.getElementById("loader").style.pointerEvents = "none" 
        console.log(view, "|", state);

        lint(initialValue);
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
                        <style id="linter" />
                        <style id="scrollbehavior" />
                        <img onClick={() => {window.open("https://"+window.location.host+"/", "_blank");}} className="editor-nocookie-watermark" src={`https://${window.location.host}/favicon.ico`} loading="lazy" alt="AiraCloud" />
                        <div id="intellisense" className="intellisense" />
                        <CodeMirror
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
                        />
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
