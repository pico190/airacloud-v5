import React, { useEffect, useState } from "react";
import { SideBar } from './editorc/Sidebar'
import { encode, decode } from 'js-base64'
import CodeMirror from '@uiw/react-codemirror';

import { langs } from '@uiw/codemirror-extensions-langs';

import { color } from '@uiw/codemirror-extensions-color';
import { inlineSuggestion } from 'codemirror-extension-inline-suggestion';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';
import { airatheme } from "../utils/codemirror/airatheme";
import $ from 'jquery'
import { nearElem } from "../utils/generalfuncs";
import { CmenuElement, ContextMenu } from "../utils/contextmenu";
import { spaces, hexToRgb } from "../utils/generalfuncs";

export function Editor({ urlparsed, sidinfo }) {
    const [reference, setReference] = useState([]);
    const [editorToken, setEditorToken] = useState(null);
    const [intelliContent, setIntelliContent] = useState([]);
    const [intelliDesc, setIntelliDesc] = useState('');
    const [intelliLoaded, setIntelliLoaded] = useState(false);
    const [files, setFiles] = useState([
        {
            type: "react",
            name: "codemirror",
            extension: "jsx",
            saved: true,
            active: true,
            token: "patatas"
        }
    ]);

    
    setInterval(() => {
            
        // Details
        Array.from(document.getElementsByClassName("cm-selectionBackground")).forEach(elem => { elem.style.setProperty('background', '#243047', 'important'); }) 
        Array.from(document.querySelectorAll('span[title="Fold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-down" alt="v" loading="lazy">`})
        Array.from(document.querySelectorAll('span[title="Unfold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-right" alt=">" loading="lazy">`})
        Array.from(document.querySelectorAll('.cm-selectionMatch')).forEach(elem => {spaces(elem.innerText) ? elem.classList.add("cm-spacematch") : elem.classList.remove("cm-spacematch")})
        
        document.querySelectorAll("span").forEach(span => {
            if(span.innerText===">") {
                var spanstyle = window.getComputedStyle(span);
                var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-meta'))
                var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
                if(cssvar === spanstyle.color) {
                    span.classList.add("cm-md-quote")
                }
            }
        })

    }, 1)

    useEffect(() => {
        const loadIntelliSense = () => {
            if (!intelliLoaded) {
                const cminfo = document.getElementById("cm-info");
                setIntelliLoaded(true);
                if (cminfo) {
                    if (localStorage.getItem("htmlintelli")) {
                        setReference(JSON.parse(decode(localStorage.getItem("htmlintelli"))));
                        cminfo.innerHTML = "Updating IntelliSense...";
                    }
                    $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
                        setReference(data);
                        cminfo.innerHTML = "";
                        localStorage.setItem("htmlintelli", encode(JSON.stringify(data)))
                    });
                }
            }
        };
        window.addEventListener("load", loadIntelliSense);
        return () => window.removeEventListener("load", loadIntelliSense);
    }, [intelliLoaded]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (editorToken) {
                const filteredContent = reference
                    .filter(element => element.name.startsWith(editorToken))
                    .map((element, index) => {
                        if (index === 0) {
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
    }, [editorToken, reference]);

    const [projectInfo, setProjectInfo] = useState({});
    const [initialvalue, setInitialValue] = useState("");
    const [value, setValue] = useState(initialvalue);
    const [lang, setLang] = useState();

    useEffect(() => {
        $.get("https://xploit.men/aira/api/v1/file/get.php", {
            token: sidinfo.token,
            filetoken: window.location.hash.replace("#", "").replace(/\//g, "")
        }, (data) => {
            console.log(data)
            setInitialValue(decode(data.content))
            var lng = null;

            if(data.lang==="html") {lng = langs.html({ config: { matchClosingTags: true, autoCloseTags: true } })}
            if(data.lang==="css") {lng = langs.less()}
            if(data.lang==="js") {lng = langs.javascript()}
            if(data.lang==="jsx") {lng = langs.javascript({config: {jsx: true}})}
            if(data.lang==="ts") {lng = langs.javascript({config: {typescript: true}})}
            if(data.lang==="tsx") {lng = langs.javascript({config: {typescript: true, jsx: true}})}
            if(data.lang==="markdown") {lng = langs.markdown()}
            if(data.lang==="python") {lng = langs.python() }
            setLang(lng);
        })
    }, [])

    langs.html({ config: { matchClosingTags: true, autoCloseTags: true } })
    const onChange = (val) => setValue(val);

    useEffect(() => {
        const projects = JSON.parse(decode(window.localStorage.getItem("DATA__PROJECTS")));
        projects.forEach(project => {
            if (project.id === urlparsed[1]) {
                setProjectInfo(project);
            }
        });
    }, [urlparsed]);

    const fetchSuggestion = async (state) => {
        return ', hola optix te observo';
    };
      
    const content = (
        <>
            <SideBar title={projectInfo.name} />
            <div className="content">
                <div className="files">
                    <ContextMenu cmenucontent={
                        <>
                            <CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=food-pizza" title="Pizza" action={() => { alert("click") }} desc="pizzas ricas" />
                            <CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=animal-cat" title="relleno rellenero" action={() => { alert("click2") }} desc="Gatito miau" />
                        </>
                    }>
                        {files.map(elem => (
                            <div className="file active" key={elem.name}>
                                <img src={`https://${window.location.host}/airaicons/${elem.type}.svg`} loading="lazy" alt="" style={{ width: "20px" }} />
                                <b>{elem.name}.{elem.extension}</b>
                                <span className="file-saved">
                                    <div className="unsaved-file" style={elem.saved ? { opacity: 0 } : null} />
                                </span>
                                <span className="file-close">
                                    <img src="https://xploit.men/scdn/?fluenticons&name=dismiss" width="10px" height="10px" loading="lazy" alt="×" />
                                </span>
                            </div>
                        ))}
                    </ContextMenu>
                </div>
                <div className="content-left">
                    <style>{":root, * {--sb-width: 28vw!important;} .content {padding: 20px; gap: 10px} .ͼ16.cm-focused .cm-selectionBackground .ͼ16 .cm-selectionLayer .cm-selectionBackground {background: #243047 !important;} .cm-editor, .cm-editor * {font-size: var(--editor-font-size);} .cm-editor, .cm-editor * {font-family: var(--editor-font-family);} .editorcontainer {position: relative;}"}</style>
                    <div className="editorcontainer">
                        <CodeMirror
                            extensions={[lang, hyperLink, color, inlineSuggestion({ fetchFn: fetchSuggestion, delay: 1000, })]}
                            value={initialvalue}
                            theme={airatheme}
                            basicSetup={{ autocompletion: false }}
                            onChange={onChange}
                        />
                        <div className="cm-info" id="cm-info">Download IntelliSense...</div>
                    </div>
                </div>
            </div>
        </>
    );

    return <>{content}</>;
}

// import React, { useEffect, useState} from "react";

// import { SideBar } from './editorc/Sidebar'
// // import { LoadWeb } from '../utils/LoadWeb'

// import { encode, decode } from 'js-base64'

// import CodeMirror from '@uiw/react-codemirror';

// import { html } from '@codemirror/lang-html';
// import { java } from '@codemirror/lang-java';
// import { javascript } from '@codemirror/lang-javascript';
// import { json } from '@codemirror/lang-json';
// import { php } from '@codemirror/lang-php';
// import { sql } from '@codemirror/lang-sql';
// import { markdown } from '@codemirror/lang-markdown';

// import { color } from '@uiw/codemirror-extensions-color';
// import { spaces } from "../utils/generalfuncs";
// import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

// import { hexToRgb } from "../utils/generalfuncs";
// import { CmenuElement, ContextMenu } from "../utils/contextmenu";

// import { airatheme } from "../utils/codemirror/airatheme";
// import { nearElem } from "../utils/generalfuncs";

// import $ from 'jquery'


// export function Editor({urlparsed, sidinfo}) {
//         // var iframelangs=["html", "php"]

//         const code = "console.log('hello world!');";
    
//         const refreshMode = {delay: 0}

//         // eslint-disable-next-line
//         const [ reference, setReference ] = useState([]);
//         const [editorToken, seteditorToken] = useState(null);
//         const [intelliContent, setIntelliContent] = useState([]);
//         const [intelliDesc, setIntelliDesc] = useState('');
//         const [ intelliloaded, loadIntelli ] = useState(false); // eslint-disable-next-line
//         var [ options, setOptions ] = useState({
//             refreshMode: refreshMode.delay,
//         }); // eslint-disable-next-line

        
//         var [ file, setfile ] = useState(window.location.hash.replace("#", "").replace(/\//g, ""));
//         var [ files, setFiles ] = useState([
//             {
//                 type: "react",
//                 name: "codemirror",
//                 extension: "jsx",
//                 saved: true,
//                 active: true,
//                 token: "patatas"
//             }
//         ]); // eslint-disable-next-line
//         var [ filesrender, setFilesrender ] = useState(<></>);
//         useEffect(() => {

//              // eslint-disable-next-line

//             setFilesrender(<>
//             {
//             files.map(elem => {
//                 return (<>
//                     <div className="file active">
//                         <img src={'https://'+window.location.host+'/airaicons/'+elem.type+'.svg'} loading="lazy" alt="" style={{width: "20px"}} /> {/*https://airacloud-v5-d1.vercel.app/airaicons/react.svg'*/}
//                         <b>{elem.name}.{elem.extension}</b>

//                             <span className="file-saved">
//                                 <div className="unsaved-file" {...files.saved ? {style: {opacity: 0}} : void(0)} />
//                             </span>
//                                 <span className="file-close"><img src="https://xploit.men/scdn/?fluenticons&name=dismiss" width="10px" height="10px" loading="lazy" alt="×" /></span>

//                     </div>
//                 </>)
//             })}
//             </>);


//         }, [files])
    
//         window.addEventListener("load", () => {
//             if(intelliloaded===false) {

//                 var cminfo = document.getElementById("cm-info")
            
//                 loadIntelli(true)
    
//                 if(cminfo) {
                    
//                     if(localStorage.getItem("htmlintelli")) {
//                         setReference(JSON.parse(decode(localStorage.getItem("htmlintelli"))));
//                         cminfo.innerHTML="Updating IntelliSense..."
        
//                     }
        
//                     $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
//                         setReference(data);
//                         cminfo.innerHTML=""
//                         localStorage.setItem("htmlintelli", encode(JSON.stringify(data)))
//                     }) 
//                 }
    

//             }

//         })

        

//         // getToken (cursor word)
//         function getEditorToken() {
            
//             var cursor = document.getElementsByClassName("cm-cursor")[0]
//             var line = document.getElementsByClassName("cm-activeLine")[0]
//             var lineArray = [];
            
//             if(line) {

//                 Array.from(line.children).forEach(elem => {

//                     var firstarray = elem.classList.contains("cm-matchingBracket") || elem.classList.contains("cm-nonmatchingBracket") ? elem.children[0] : elem
//                     if(elem.className!=="") {
//                         if(elem.localName==="span" && !elem.innerText.includes("<") && !elem.innerText.includes(">") && !elem.innerText.includes("/")) {
//                             lineArray.push(firstarray)
//                         }
//                     }
    
//                 }) 
//                 var nearelm = nearElem(lineArray, cursor)
//                 return nearelm ? nearelm.innerText : null
//             } else {return false;}
                
//         }
//         setInterval(() => {
            
//             // Details
//             Array.from(document.getElementsByClassName("cm-selectionBackground")).forEach(elem => { elem.style.setProperty('background', '#243047', 'important'); }) 
//             Array.from(document.querySelectorAll('span[title="Fold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-down" alt="v" loading="lazy">`})
//             Array.from(document.querySelectorAll('span[title="Unfold line"]')).forEach(elem => {elem.innerHTML=`<img src="https://xploit.men/scdn/?fluenticons&name=chevron-right" alt=">" loading="lazy">`})
//             Array.from(document.querySelectorAll('.cm-selectionMatch')).forEach(elem => {spaces(elem.innerText) ? elem.classList.add("cm-spacematch") : elem.classList.remove("cm-spacematch")})
            
//             document.querySelectorAll("span").forEach(span => {
//                 if(span.innerText===">") {
//                     var spanstyle = window.getComputedStyle(span);
//                     var cssvarjson = hexToRgb(spanstyle.getPropertyValue('--cm-md-meta'))
//                     var cssvar = `rgb(${cssvarjson.r}, ${cssvarjson.g}, ${cssvarjson.b})`
//                     if(cssvar === spanstyle.color) {
//                         span.classList.add("cm-md-quote")
//                     }
//                 }
//             })

//         }, 1)

//         setInterval(() => {

//             // Update token
//             seteditorToken(getEditorToken());

//             // IntelliBox Position
//             // var cursor = document.getElementsByClassName("cm-cursor")[0]
//             // var intellicontainer = document.getElementById("intellisense")
//             // var editor = document.getElementsByClassName("cm-editor")[0]

//             // if(!editor.classList.contains("cm-focused") || document.getElementsByClassName("cm-selectionBackground")[0] || intelliContent === "") {
//             //     intellicontainer.style.display="none"
//             // } else {
//             //     intellicontainer.style.display="flex"
//             //     intellicontainer.style.left = cursor.offsetLeft + "px"
//             //     intellicontainer.style.top = cursor.offsetTop + "px"
//             // }


//         }, 100)
//         // setInterval(() => {
            
//         //     var htmltags = []
//         //     reference.forEach(htmltag => {htmltags.push(htmltag.name)})

//         //     document.querySelectorAll("span").forEach(elem => {
//         //         if(htmltags.includes(elem.innerText) && elem.className.includes("ͼ") && elem.nextElementSibling.innerText.includes(">")) {
//         //             elem.classList.add("_cTagExistent")
//         //         }
//         //     })
//         // }, 1)

//         useEffect(() => {
//             const timer = setTimeout(() => {
//                 if (editorToken) {
//                     const filteredContent = reference
//                         .filter(element => element.name.startsWith(editorToken))
//                         .map((element, index) => {
//                             if(index === 0) {
//                                 setIntelliDesc(element.desc)
//                             }

//                             return (<div key={element.name} className={`intellitem ${index === 0 ? "intelliselected" : ""}`} id={element.name}>
//                                 <img src={`https://xploit.men/scdn/fluenticons/airaduotone/${element.type}.svg`} alt="" />
//                                 <span><b>{editorToken}</b>{element.name.replace(editorToken, "")}</span>
//                                 <div className="intelliseparator"><span>{element.cat !== undefined ? element.cat : ""}</span></div>
//                             </div>)
//                         });
//                     setIntelliContent(filteredContent);
//                 } else {
//                     setIntelliContent([]);
//                     setIntelliDesc('');
//                 }
//             }, 100);
    
//             return () => clearTimeout(timer);
//         }, [editorToken]);
    
//         /*
//         * default html: --- html({ config:{matchClosingTags: true, autoCloseTags: true } })
//         * default jsx: ---
//         * 
//         */



//         const [projectInfo, setProjectInfo] = React.useState({});

//         const [initialValue, setInitialValue] = React.useState("");
//         const [value, setValue] = React.useState(initialValue);
//         const onChange = React.useCallback((val, viewUpdate) => {
//           console.log('val:', val);
//           setValue(val);
//         }, []);
      

//         const [content, setContent] = (<>
//             <SideBar title={projectInfo.name} >
//             </SideBar>
//             <div className="content">
//                     <div className="files" >
//                         <ContextMenu cmenucontent={<><CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=food-pizza" title="Pizza" action={() => {alert("click")}} desc="pizzas ricas" /> <CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=animal-cat" title="relleno rellenero" action={() => {alert("click2")}} desc="Gatito miau" /></>}>
//                                     {
//                                         filesrender
//                                     }
//                         </ContextMenu>
//                     </div>

//                 <div className="content-left">
//                     <style children=":root, * {--sb-width: 28vw!important;} .content {padding: 20px; gap: 10px} .ͼ16.cm-focused .cm-selectionBackground .ͼ16 .cm-selectionLayer .cm-selectionBackground {background: #243047 !important;}" />
//                     <style children={`.cm-editor, .cm-editor * {font-size: var(--editor-font-size);}`} id="fontsize" />         
//                     <style children={`.cm-editor, .cm-editor * {font-family: var(--editor-font-family);}`} id="fontfamily" />
                    
//                     <div className="editorcontainer">
//                         {/* <div id="intellisense" className="intellisense" >
//                             <div id="intelli">{intelliContent}</div>
//                             <div id="intellidesc" dangerouslySetInnerHTML={{__html: intelliDesc}}></div>
//                         </div> */}
//                         <CodeMirror
//                             extensions={[html({ config:{matchClosingTags: true, autoCloseTags: true } }), hyperLink, color]}
//                             value={value}
//                             theme={airatheme}
//                             options={{
//                                 autocompletion: false
//                             }}
//                             onChange={onChange}
//                         />
//                         <div className="cm-info" id="cm-info" children="Download IntelliSense..." />
//                     </div>
//                     {
//                         // <div className="iframe">
//                         //     <div className="url">
//                         //         https://sexo.com/
//                         //     </div>
//                         //     <iframe id="iframe-1"></iframe>
//                         // </div>
//                     }
//                 </div>
//             </div>
//             </>);


//         var projects = JSON.parse(decode(window.localStorage.getItem("DATA__PROJECTS")))

//         projects.forEach(project => {
//             if(project.id === urlparsed[1]) {
//                 setProjectInfo(project);
//             }
//         })


//         return (<>{content}</>)
// }