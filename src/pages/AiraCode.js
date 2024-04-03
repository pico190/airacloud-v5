// ________  ___  ________  ________  ________  ___       ________  ___  ___  ________          ___      ___ ________      
// |\   __  \|\  \|\   __  \|\   __  \|\   ____\|\  \     |\   __  \|\  \|\  \|\   ___ \        |\  \    /  /|\   ____\     
// \ \  \|\  \ \  \ \  \|\  \ \  \|\  \ \  \___|\ \  \    \ \  \|\  \ \  \\\  \ \  \_|\ \       \ \  \  /  / | \  \___|_    
//  \ \   __  \ \  \ \   _  _\ \   __  \ \  \    \ \  \    \ \  \\\  \ \  \\\  \ \  \ \\ \       \ \  \/  / / \ \_____  \   
//   \ \  \ \  \ \  \ \  \\  \\ \  \ \  \ \  \____\ \  \____\ \  \\\  \ \  \\\  \ \  \_\\ \       \ \    / /   \|____|\  \  
//    \ \__\ \__\ \__\ \__\\ _\\ \__\ \__\ \_______\ \_______\ \_______\ \_______\ \_______\       \ \__/ /      ____\_\  \ 
//     \|__|\|__|\|__|\|__|\|__|\|__|\|__|\|_______|\|_______|\|_______|\|_______|\|_______|        \|__|/      |\_________\
//                                                                                                              \|_________|

// EDITOR NO COOKIE - IFRAME VERSION OF THE EDITOR
      
//                      ///////////////////////////////////////////////
//                      //                LIBRARIES                  //
//                      ///////////////////////////////////////////////

//                                  --- IMPORTANT LIBRARIES ---
//     IMPORTS ---------------------------------------------------  LIBRARY --------------------
import React, {  useEffect, useState  }                             from "react"                ; // React     
import $                                                            from 'jquery'               ; // JQUERY
import {  encode, decode              }                             from 'js-base64'            ; // BASE 64
import CodeMirror                                                   from '@uiw/react-codemirror'; // CODEMIRROR  
import {  Prec                        }                             from "@codemirror/state"    ; // CODEMIRROR UTILS   
import {  keymap                      }                             from "@codemirror/view"     ; // CODEMIRROR UTILS

//                                 --- CODEMIRROR EXTENSIONS ---
//     IMPORTS ---------------------------------------------------  LIBRARY --------------------
import rainbowBrackets                                              from 'rainbowbrackets'                       ; // RAINBOW BRACKETS
import {  color                       }                             from '@uiw/codemirror-extensions-color'      ; // CSS COLOR PICKER
import {  indentationMarkers          }                             from '@replit/codemirror-indentation-markers'; // IDENTATION MARKERS
import {  inlineSuggestion            }                             from 'codemirror-extension-inline-suggestion'; // INLINE SUGGESTIONS
import {  hyperLink                   }                             from '@uiw/codemirror-extensions-hyper-link' ; // HYPER LINK
import {  showMinimap                 }                             from "@replit/codemirror-minimap"            ; // CODEMIRROR MINIMAP
import {  vscodeKeymap                }                             from "@replit/codemirror-vscode-keymap"      ; // VSCODE KEYMAP [NOT WORKING]
import {  continueKeymap              }                             from "@valtown/codemirror-continue"          ; // CONTINUE KEYMAP

//                                       --- EXTRA ---
//     IMPORTS ---------------------------------------------------  LIBRARY --------------------
import langLoader                                                   from "../utils/codemirror/langloader"    ; // LOADS CODING LANGUAGE
import loadDetails                                                  from "../utils/codemirror/loadDetails"   ; // LOADS SOME DETAILS (FOLD ICONS, SEARCH ICONS)
import loadLint                                                     from "../utils/codemirror/lints/loadLint"; // LOADS THE CODE ERROR DETECTOR

import htmlIntelli                                                  from "../utils/codemirror/intelli/html" ;

import {  airatheme                                               } from "../utils/codemirror/airatheme"    ; // AIRA CUSTOM THEME FOR CODEMIRROR
import { htmlintelli, editorislang                                } from "../utils/codemirror/langs"        ; // HTML INTELLI
import {  lintmsg                                                 } from "../utils/codemirror/lints/lintmsg"; // MARKS THE CODE ERRORS IN THE EDITOR
import { console_info, console_warn, console_group, console_error } from "../utils/Console"                 ; // CONSOLE MESSAGES
import { saveToCache, retrieveFromCache                           } from "../utils/cache"                   ; // SAVES DATA IN CACHE




export function AiraCode({ 
    lang=langLoader(""),
    content="",
    onChange=() => {},
    onType=() => {},
    className="",
 }) {



    // USE STATES
    var [ reference, setReference         ] = useState([]   ); // INTELLI INFO
    var [ intelliLoaded, setIntelliLoaded ] = useState(false); // IF INTELLI IS LOADED
    var [ initialValue, setinitialValue   ] = useState(content); // THE VALUE WHEN YOU LOAD THE WEB
    var [ extensionsarray, setExtensions  ] = useState(null ); // EXTENSIONS
    var [ minimaplines, setMinimapLines   ] = useState([]   ); // MINIMAP ERROR LINES
    var [ errors, setErrors               ] = useState([]   ); // ERROR LIST OF LINTER



    // IntelliSense
    useEffect(() => {
        const loadIntelliSense = () => {
            if (!intelliLoaded) {
                try {
                    if(editorislang(htmlintelli)) {
                        setIntelliLoaded(true);
                        retrieveFromCache('/intellisense-html.txt')
                            .then(function(response) {
                                if (response) {
                                    setReference(JSON.parse(decode(response)));
                                } else { 
                                    $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
                                        saveToCache('/intellisense-html.txt', encode(JSON.stringify(data)))
                                        .then(function() {
                                          console_info("HTML Intelli Saved in caché");
                                        })
                                        .catch(function(error) {
                                          console_error("Error while saving in caché:")
                                          console.error(error)
                                        });    
                                        setReference(data);
                                    });
                                }
                            })
                            .catch(function(error) {
                                console_error("Error al get caché")
                                console.error(error);
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
                    Prec.high(keymap.of(continueKeymap)),
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
    useEffect(() => {
      console.log("Errors detected:", errors);
      lintmsg(errors, setMinimapLines);
    }, [errors]);
  
  
    setInterval(() => {
        loadDetails();

        var cursor = document.querySelector(".cm-cursor-primary");
        var intellisense = document.getElementById("intellisense");
        
        intellisense.style.left = (cursor.getBoundingClientRect().left - 3) + "px";
        intellisense.style.top = (cursor.getBoundingClientRect().top - 20) + "px";
    }, 1);


    let typingTimer;
    const doneTyping = (val) => {
        onType(val);
        loadLint(val, setErrors)
    };

    const onChange = (val) => {
        onChange(val);
        setErrors([])

        if(typingTimer) {
            clearTimeout(typingTimer);
        }
        typingTimer = setTimeout(() => {doneTyping(val)}, 1000); 


    };
    const onUpdate = (viewUpdate) => {
        var editorToken = viewUpdate.view.observer.selectionRange.focusNode.wholeText
        htmlIntelli(editorToken);
        lintmsg(errors);
        console.log(viewUpdate)
    };
    const mount = (view, state) => { 
        document.getElementById("loader").style.opacity = 0; 
        document.getElementById("loader").style.pointerEvents = "none" 
        console.log(view, "|", state);

        loadLint(initialValue, setErrors);
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
                        <style id="langstyle" />
                        <style id="linter" />
                        <style id="scrollbehavior" />
                        <div id="intellisense" className="intellisense" />
                        <CodeMirror
                            className={className}
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
        </>
    );
}
