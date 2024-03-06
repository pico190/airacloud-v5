import React, { useEffect, useState} from "react";

import { SideBar } from './editorc/Sidebar'
// import { LoadWeb } from '../utils/LoadWeb'

import { encode, decode } from 'js-base64'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { color } from '@uiw/codemirror-extensions-color';
import { tags as t } from '@lezer/highlight';
// import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

import { CmenuElement, ContextMenu } from "../utils/contextmenu";

import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
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
    
        const refreshMode = {delay: 0}

        // eslint-disable-next-line
        const [ reference, setReference ] = useState([]);
        const [editorToken, seteditorToken] = useState(null);
        const [intelliContent, setIntelliContent] = useState([]);
        const [intelliDesc, setIntelliDesc] = useState('');
        const [ intelliloaded, loadIntelli ] = useState(false); // eslint-disable-next-line
        const [ codeValue, setCodeValue ] = useState(code); // eslint-disable-next-line
        var [ options, setOptions ] = useState({
            refreshMode: refreshMode.delay,
        }); // eslint-disable-next-line
        var [ files, setFiles ] = useState([
            {
                type: "react",
                name: "codemirror",
                extension: "jsx",
                saved: true,
                active: true,
                token: "patatas"
            }
        ]); // eslint-disable-next-line
        var [ filesrender, setFilesrender ] = useState(<></>);
        useEffect(() => {

             // eslint-disable-next-line
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
    
        window.addEventListener("load", () => {
            if(intelliloaded===false) {

                var cminfo = document.getElementById("cm-info")
            
                loadIntelli(true)
    
                if(cminfo) {
                    
                    if(localStorage.getItem("htmlintelli")) {
                        setReference(JSON.parse(decode(localStorage.getItem("htmlintelli"))));
                        cminfo.innerHTML="Updating IntelliSense..."
        
                    }
        
                    $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
                        setReference(data);
                        cminfo.innerHTML=""
                        localStorage.setItem("htmlintelli", encode(JSON.stringify(data)))
                    }) 
                }
    

            }

        })

        

        // getToken (cursor word)
        function getEditorToken() {
            
            var cursor = document.getElementsByClassName("cm-cursor")[0]
            var line = document.getElementsByClassName("cm-activeLine")[0]
            var lineArray = [];
            
            if(line) {

                Array.from(line.children).forEach(elem => {

                    var firstarray = elem.classList.contains("cm-matchingBracket") || elem.classList.contains("cm-nonmatchingBracket") ? elem.children[0] : elem
                    if(elem.className!=="") {
                        if(elem.localName==="span" && !elem.innerText.includes("<") && !elem.innerText.includes(">") && !elem.innerText.includes("/")) {
                            lineArray.push(firstarray)
                        }
                    }
    
                }) 
                var nearelm = nearElem(lineArray, cursor)
                return nearelm ? nearelm.innerText : null
            } else {return false;}
                
        }

        setInterval(() => {


            // Details
            Array.from(document.getElementsByClassName("cm-selectionBackground")).forEach(elem => { elem.style.setProperty('background', '#243047', 'important'); }) 
            Array.from(document.querySelectorAll('span[title="Fold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-down" alt="v" loading="lazy">`})
            Array.from(document.querySelectorAll('span[title="Unfold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-right" alt=">" loading="lazy">`})
            
            // Update token
            seteditorToken(getEditorToken());
            console.log(editorToken)

            // IntelliBox Position
            var cursor = document.getElementsByClassName("cm-cursor")[0]
            var intellicontainer = document.getElementById("intellisense")
            var editor = document.getElementsByClassName("cm-editor")[0]

            if(!editor.classList.contains("cm-focused") || document.getElementsByClassName("cm-selectionBackground")[0] || intelliContent === "") {
                intellicontainer.style.display="none"
            } else {
                intellicontainer.style.display="flex"
                intellicontainer.style.left = cursor.offsetLeft + "px"
                intellicontainer.style.top = cursor.offsetTop + "px"
            }


        }, 100)

        useEffect(() => {
            const timer = setTimeout(() => {
                if (editorToken) {
                    const filteredContent = reference
                        .filter(element => element.name.startsWith(editorToken))
                        .map((element, index) => {
                            if(index === 0) {
                                setIntelliDesc(element.desc)
                            }

                            return (<div key={element.name} className={`intellitem ${index === 0 ? "intelliselected" : ""}`} id={element.name}>
                                <img src={`https://xploit.men/scdn/fluenticons/airaduotone/${element.type}.svg`} alt="" />
                                <span><b>{editorToken}</b>{element.name.replace(editorToken, "")}</span>
                                <div className="intelliseparator"><span>{element.cat !== undefined ? element.cat : ""}</span></div>
                            </div>)
                        });
                    setIntelliContent(filteredContent);
                } else {
                    setIntelliContent([]);
                    setIntelliDesc('');
                }
            }, 100);
    
            return () => clearTimeout(timer);
        }, [editorToken]);
    
        return (
            <>

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
                    <style children={`.cm-editor, .cm-editor * {font-size: var(--editor-font-size);}`} id="fontsize" />         
                    <style children={`.cm-editor, .cm-editor * {font-family: var(--editor-font-family);}`} id="fontfamily" />
                    
                    <div className="editorcontainer">
                        <div id="intellisense" className="intellisense" >
                            <div id="intelli">{intelliContent}</div>
                            <div id="intellidesc" dangerouslySetInnerHTML={{__html: intelliDesc}}></div>
                        </div>
                        <CodeMirror
                            extensions={[html({ config:{matchClosingTags: true, autoCloseTags: true } }), color]}
                            value={codeValue}
                            theme={vscodeDarkInit({
                                styles: [
                                    {tag: "tagName", color: '#4ec9b0'},
                                    {tag: "tagNameStandard", color: '#569cd6'}
                                ]
                            })}
                            options={{
                                autocompletion: false
                            }}
                        />
                        <div className="cm-info" id="cm-info" children="Download IntelliSense..." />
                    </div>
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