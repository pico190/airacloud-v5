import React, { useEffect, useRef, useState} from "react";

import { SideBar } from './editorc/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import { encode, decode } from 'js-base64'

import CodeMirror, { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { color, colorView, colorTheme } from '@uiw/codemirror-extensions-color';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

import { CmenuElement, ContextMenu } from "../utils/contextmenu";

import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { nearElem } from "../utils/generalfuncs";

import $ from 'jquery'


export function Editor({urlparsed, sidinfo}) {
                                                                                                // var projectId
                                                                                                // try {
                                                                                                //     projectId = urlparsed[1];
                                                                                                //     if(projectId.length === 0) {
                                                                                                //         projectId = "none";
                                                                                                //         return (
                                                                                                //             <LoadWeb url={'https://'+window.location.host+'/notfound.html'} />
                                                                                                //         )
                                                                                                //     }
                                                                                                // } catch(err) {
                                                                                                //     projectId = "none";
                                                                                                //     return (
                                                                                                //         <LoadWeb url={'https://'+window.location.host+'/notfound.html'} />
                                                                                                //     )
                                                                                                // }

        

        // var iframelangs=["html", "php"]

        const code = "console.log('hello world!');";
    
        const editor = useRef(); 
    
        const refreshMode = {delay: 0}

        const [ reference, setReference ] = useState([]);
        const [ intelliloaded, loadIntelli ] = useState(false);
        const [ codeValue, setCodeValue ] = useState(code);
        var [ options, setOptions ] = useState({
            refreshMode: refreshMode.delay,
            fontsize: "20",
            fontfamily: "Consolas"
        });
        var [ files, setFiles ] = useState([
            {
                type: "react",
                name: "codemirror",
                extension: "jsx",
                saved: true,
                active: true,
                token: "patatas"
            }
        ]);
        var [ filesrender, setFilesrender ] = useState(<></>);
        useEffect(() => {

            var rendering = <></>

            files.forEach(elem => {
                rendering += <>
                    <div className="file active">
                        <img src={'https://'+window.location.host+'/airaicons/'+elem.type+'.svg'} loading="lazy" alt="" style={{width: "20px"}} /> {/*https://airacloud-v5-d1.vercel.app/airaicons/react.svg'*/}
                        <b>{elem.name}.{elem.extension}</b>

                            <span className="file-saved">
                                <div className="unsaved-file" {...files.saved ? {style: {opacity: 0}} : void(0)} />
                            </span>
                                <span className="file-close">
                            </span>

                    </div>
                </>
            })

        }, [files])
    
        const handleAlgoChange = (e) => {
            setCodeValue(e)
        }
    
        const { setContainer } = useCodeMirror({
            container: editor.current,
            extensions: [javascript({ jsx: true }), color],
            value: codeValue, 
            theme: vscodeDark,
            autocomplete: false,
            onChange: handleAlgoChange,
            height: '100%',
            width: '100%',
        });
    
        window.addEventListener("load", () => {
            if(intelliloaded===false) {

                var cmtheme = document.getElementsByClassName("cm-theme")[0]
            
                loadIntelli(true)
    
                if(!document.getElementById("cm-info")) {
                    cmtheme.innerHTML = cmtheme.innerHTML + `<div class="cm-info" id="cm-info">Downloading IntelliSense...</div>`
                }
                if(localStorage.getItem("htmlintelli")) {
                    setReference(JSON.parse(decode(localStorage.getItem("htmlintelli"))));
                    document.getElementById("cm-info").innerHTML="Updating IntelliSense..."
    
                }
    
                $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
                    setReference(data);
                    document.getElementById("cm-info").style.display="none"
                    localStorage.setItem("htmlintelli", encode(JSON.stringify(data)))
                }) 
    

            }

        })
        setInterval(() => {

            var line = document.getElementsByClassName("cm-activeLine")[0]
            var cursor = document.getElementsByClassName("cm-cursor")[0]

            if(line!==undefined && cursor!==undefined) {
                // var linecontent = line.innerText
     
                // Intelli

                var textToken = nearElem(line.children, cursor)


            }

        }, 100)
        useEffect(() => {

            setContainer(editor.current)

            if(options.refreshMode === refreshMode.delay) {

            }
            
        }, [editor.current]);
    
    
        return (
            <>
            <div id="intellisense" className="intellisense" >
                <div id="intelli" />
                <div id="desc" />
            </div>

            <SideBar title="Codemirror Playground" >
                    <div style={{display: "flex", gap: "10px"}}>
                        <img src={'https://'+window.location.host+'/airaicons/'+urlparsed[1]+'.svg'} loading="lazy" alt="" style={{width: "20px"}} /> {/*https://airacloud-v5-d1.vercel.app/airaicons/react.svg'*/}
                        <span>{urlparsed[1]}</span>
                    </div>
            </SideBar>
            <div className="content">
                    <div className="files" >
                        <ContextMenu cmenucontent={<><CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=food-pizza" title="Pizza" action={() => {alert("click")}} desc="pizzas ricas" /> <CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=animal-cat" title="relleno rellenero" action={() => {alert("click2")}} desc="Gatito miau" /></>}>
                                    {
                                        filesrender
                                    }
                        </ContextMenu>
                    </div>

                <div className="content-left">
                    <style children=":root, * {--sb-width: 28vw!important;} .content {padding: 20px; gap: 10px} .ͼ16.cm-focused .cm-selectionBackground .ͼ16 .cm-selectionLayer .cm-selectionBackground {background: #243047 !important;}" />
                    <style children={`.cm-editor, .cm-editor * {font-size: ${options.fontsize}px;}`} id="fontsize" />         
                    <style children={`.cm-editor, .cm-editor * {font-family: ${options.fontfamily};}`} id="fontfamily" />
                    
                    <div style={{width: "100%", height: "100%"}} className="cm-theme" ref={editor} />
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