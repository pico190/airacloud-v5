import React from 'react';

import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import Monaco from '@monaco-editor/react';

export function Editor({urlparsed, sidinfo}) {
    if(urlparsed[1].length<=0) {
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
            onLoad={() => {alert("sex")}}
            theme="vs-dark" 
            defaultLanguage="php" 
            defaultValue={testPhpCode} />
            <div style={{position:"fixed", right: "0px", height: "100vh", width: "20%"}}>
                <b>Propiedades epicas del editor</b><span> (esto es de aira y es temporal papi)</span>
                <hr />
                <input value="Consolas" onChange={() => {changeFont()}} id="fontFamily" />
            </div>
            </>
        )
    }
}