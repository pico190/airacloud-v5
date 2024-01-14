import React from 'react';

import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import Monaco from '@monaco-editor/react';

export function Editor({urlparsed, sidinfo}) {
    if(urlparsed[1].length<=0 || urlparsed[1] === undefined || urlparsed[1] === null) {
        return (
            <LoadWeb url="https://airacloud-v5.vercel.app/notfound.html" />
        )
    } else {
        var testPhpCode = `<?php
$a = "patatas";
?>

<h1><?php echo $a; ?></h1>`
        function changeFont() {
            var input = document.getElementById("fontFamily");

        }
        return (
            <>
            <style id="style--1" />
            <Monaco 
            height="100vh"
            width="80%"
            onChange={() => {alert("changed")}}
            editorDidMount={() => {alert("sex")}}
            theme="vs-dark" 
            options={{
                contextmenu: false
            }}
            defaultLanguage="php" 
            defaultValue={testPhpCode} />
            <div style={{position:"fixed", right: "0px", height: "100vh", width: "20%", padding: "8px", top: "0px", backgroundColor: "#ffffff08"}}>
                <b>Propiedades epicas del editor</b><span> (esto es de aira y es temporal papi)</span>
                <hr style={{border: 0, borderBottom: "1px solid #ffffff24"}} />
                <input value="Consolas" placeholder="Font Family" onChange={() => {changeFont()}} id="fontFamily" style={{background: "#ffffff0f", border: 0, padding: "8px", borderRadius: "3px", outline: 0}} />
            </div>
            </>
        )
    }
}