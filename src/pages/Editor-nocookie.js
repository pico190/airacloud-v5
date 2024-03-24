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
                        <svg style="display: none;" id="svgroundcorner" />
                        <style children="* {--editor-font-size: 2vw;} .editorcontainer {border: none; border-radius: 0px;}" />
                        <style id="langstyle" />
                        <img onClick={() => {window.open("https://"+window.location.host+"/", "_blank");}} classList="editor-nocookie-watermark" src={`https://${window.location.host}/favicon.ico`} loading="lazy" alt="AiraCloud" />
                        <CodeMirror
                            className="editorcontainer"
                            extensions={extensionsarray}
                            value={initialValue}
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
