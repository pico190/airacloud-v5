import React from 'react';

import { SideBar } from './editorc/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { color, colorView, colorTheme } from '@uiw/codemirror-extensions-color';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';


import { vscodeDark } from '@uiw/codemirror-theme-vscode';


export function Editor({urlparsed, sidinfo}) {
                    var projectId
                    try {
                        projectId = urlparsed[1];
                        if(projectId.length === 0) {
                            projectId = "none";
                            return (
                                <LoadWeb url={'https://'+window.location.host+'/notfound.html'} />
                            )
                        }
                    } catch(err) {
                        projectId = "none";
                        return (
                            <LoadWeb url={'https://'+window.location.host+'/notfound.html'} />
                        )
                    }

        

        // var iframelangs=["html", "php"]
        var fontsize_ = "20";
        var fontfamily_ = "20";
        return (
            <>
            <SideBar title="Codemirror Playground" >
                <div style={{display: "flex", gap: "10px"}}>
                    <img src={'https://'+window.location.host+'/airaicons/'+urlparsed[1]+'.svg'} loading="lazy" alt="" style={{width: "20px"}} />
                    <span>{urlparsed[1]}</span>
                        <hr />
                        <b>Font Size:</b>
                        <input type="range" id="fontsizeinput" min="10" max="55" value="20" onChange={() => {document.getElementById("fontsize").innerHTML=`.cm-editor, .cm-editor * {font-size: ${document.getElementById("fontsizeinput").value}px;}`}} />
                        <br />
                        <b>Font Family:</b>
                        <input type="text" id="fontfamilyinput" value="Consolas" placeholder="Introduce una fuente que esté en tu dispositivo." onChange={() => {document.getElementById("fontfamily").innerHTML=`.cm-editor, .cm-editor * {font-family: ${document.getElementById("fontfamilyinput").value}px;}`}} style={{border: "none", outline: 0, color: "black"}} />
                </div>
            </SideBar>
            <div className="content">
                <div className="content-left">
                    <style children=":root, * {--sb-width: 28%!important;} .content {padding: 20px;}" />
                    <style children={`.cm-editor, .cm-editor * {font-size: ${fontsize_}px;}`} id="fontsize" />         
                    <style children={`.cm-editor, .cm-editor * {font-family: ${fontfamily_}px;}`} id="fontfamily" />
                    
                    <CodeMirror
                    value="console.log('hello world!');"
                    height="100%"
                    width="100%"
                    theme={vscodeDark}
                    extensions={[javascript({ jsx: true }), color]}
                    />
                    {
                        // <div className="iframe">
                        //     <div className="url">
                        //         https://sexo.com/
                        //     </div>
                        //     <iframe id="iframe-1"></iframe>
                        // </div>
                    }
                </div>
            </div>
            </>
        )
}