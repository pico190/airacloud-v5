import langLoader from "../utils/codemirror/langloader"    ; // LOADS CODING LANGUAGE
import { AiraCode } from "./AiraCode";
import { encode, decode } from 'js-base64'; // BASE 64
import React, { useEffect, useState } from "react"; // React     
import { console_info, console_warn, console_group, console_error } from "../utils/Console"; // CONSOLE MESSAGES

export function EditorNoCookie(urlparsed) {

    var [editorlang, setEditorLang] = useState(langLoader())
    var [editorcontent, setEditorContent] = useState("");
    
    // Format: https://airaurl/editor-nocookie/lang/base64editorcontent
    useEffect(() => {
        
        // URL CODE DETECTOR ---------------------------------------
        
        var lang = langLoader(urlparsed[1]);
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

        setEditorLang(lang);
        setEditorContent(value);

    }, [urlparsed])

    function change(val) {
        window.history.pushState({}, null, "https://"+window.location.host+"/"+urlparsed[0]+"/"+urlparsed[1]+"/"+encode(val));
        window.parent.postMessage(val, "*");
    }

    return (

        <>
        <style children="* {--editor-font-size: 2vw;} .editorcontainer {border: none;
            border-radius: 0px !important;
            -webkit-border-radius: 0px !important;
            -moz-border-radius: 0px !important;
            -ms-border-radius: 0px !important;
            -o-border-radius: 0px !important;}" />
        <img onClick={() => {window.open("https://"+window.location.host+"/", "_blank");}} className="editor-nocookie-watermark" src={`https://${window.location.host}/favicon.ico`} loading="lazy" alt="AiraCloud" />
        <AiraCode 
            lang={editorlang}
            content={editorcontent}
            onChange={change}
            className="editorcontainer"
        />
        </>        
    )          
}