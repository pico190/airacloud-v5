import React, { useState } from 'react';

import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import Monaco from '@monaco-editor/react';

export function Editor({urlparsed, sidinfo}) {
    try {
        var projectId = urlparsed[1];
        if(projectId.length === 0) {
            projectId = "none";
            return (
                <LoadWeb url="https://airacloud-v5.vercel.app/notfound.html" />
            )
        }
    } catch(err) {
        var projectId = "none";
        return (
            <LoadWeb url="https://airacloud-v5.vercel.app/notfound.html" />
        )
    }
        const [options, setOptions] = useState({
            fontSize: "20px",
            contextmenu: false
        });
        var testPhpCode = `<?php
$a = "patatas";
?>

<h1><?php echo $a; ?></h1>`
        function changeFont() {
            var input = document.getElementById("fontFamily").value;
            setTimeout(() => {
                document.getElementById("fontFamily").value = input;
            }, 10)
            var style = document.getElementById("style--1");
            style.innerHTML = `.monaco-editor *, .monaco-editor {
                font-family: '${input}', Consolas!important;
            }`
        }
        function changeSize() {
            var input = document.getElementById("fontSize").value;
            setTimeout(() => {
                document.getElementById("fontSize").value = input;
            }, 10)
            var option = options;
            option.fontSize = input
            setOptions(option)
        }
        function loadEditor() {
            changeFont();
        }
        window.addEventListener("load", () => {
            console.log("loaded")
        })
        return (
            <>
            <style id="style--1" />
            <Monaco 
            height="100vh"
            width="80%"
            onChange={() => {}}
            onMount={() => {loadEditor()}}
            theme="vs-dark" 
            options={options}
            defaultLanguage="php" 
            defaultValue={testPhpCode} />
            <div style={{position:"fixed", right: "0px", height: "100vh", width: "20%", padding: "8px", top: "0px", backgroundColor: "#ffffff08"}}>
                <b>Propiedades epicas del editor</b><span> (esto es de aira y es temporal papi)</span>
                <hr style={{border: 0, borderBottom: "1px solid #ffffff24"}} />
                <input type="input" value="Consolas" placeholder="Font family" onChange={() => {changeFont()}} id="fontFamily" style={{background: "#ffffff0f", border: 0, padding: "8px", borderRadius: "3px", outline: 0}} />
            </div>
            </>
        )
}