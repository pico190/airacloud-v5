import React, { useEffect, useState } from "react";
import { SideBar } from './editorc/Sidebar'
import { encode, decode } from 'js-base64'
import CodeMirror from '@uiw/react-codemirror';

import { langs } from '@uiw/codemirror-extensions-langs';
import { href } from "../utils/generalfuncs";
import rainbowBrackets from 'rainbowbrackets'   
import { color } from '@uiw/codemirror-extensions-color';
import { indentationMarkers } from '@replit/codemirror-indentation-markers';
import { inlineSuggestion } from 'codemirror-extension-inline-suggestion';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';
import { airatheme } from "../utils/codemirror/airatheme";
import $ from 'jquery'
import { nearElem } from "../utils/generalfuncs";
import { CmenuElement, ContextMenu } from "../utils/contextmenu";
import { spaces, hexToRgb } from "../utils/generalfuncs";

export function Editor({ sidinfo, urlparsed }) {
    const [reference, setReference] = useState([]);
    const [editorToken, setEditorToken] = useState(null);
    const [intelliContent, setIntelliContent] = useState([]);
    const [intelliDesc, setIntelliDesc] = useState('');
    const [intelliLoaded, setIntelliLoaded] = useState(false);
    const [cminfo, setCminfo] = useState("Download IntelliSense...");
    const [files, setFiles] = useState([
        // {
        //     type: "react",
        //     name: "codemirror",
        //     extension: "jsx",
        //     saved: true,
        //     active: true,
        //     token: "patatas"
        // }
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
        
        setFileToken(window.location.hash.replace("#", "").replace(/\//g, ""));

    }, 1)

    useEffect(() => {
        const loadIntelliSense = () => {
            if (!intelliLoaded) {
                setIntelliLoaded(true);
                    if (localStorage.getItem("htmlintelli")) {
                        setReference(JSON.parse(decode(localStorage.getItem("htmlintelli"))));
                        setCminfo("Updating IntelliSense...");
                    }
                    $.get("https://xploit.men/References/get.php?file=html/es.json", (data) => {
                        setReference(data);
                        setCminfo("");
                        localStorage.setItem("htmlintelli", encode(JSON.stringify(data)))
                    });
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
    const [initialValue, setinitialValue] = useState("");
    const [cmvalue, setcmvalue] = useState("");
    const [lang, setLang] = useState(null);
    const [extensionsarray, setExtensions] = useState(null);
    const [filetoken, setFileToken] = useState(window.location.hash.replace("#", "").replace(/\//g, ""));

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

    const onChange = (val) => setcmvalue(val);

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

      useEffect(() => {
        console.log("update 3");
        $.post("https://xploit.men/aira/api/v1/file/all.php", {
            token: sidinfo.token,
            project: projectInfo.id
        }, (files) => {
            var fles = []
            files.forEach((file) => {
                fles.push({
                    type: file.lang,
                    name: file.name,
                    extension: file.format,
                    saved: false,
                    active: filetoken === file.filetoken,
                    token: file.filetoken
                })
            })

            setFiles(fles);
        })
      }, [projectInfo, filetoken])

      useEffect(() => {
        console.log("update 2");
        $.post("https://xploit.men/aira/api/v1/file/get.php", {
            token: sidinfo.token,
            filetoken: filetoken
        }, (data) => {

            // var fles = []
            // files.forEach((file, index) => {
            //     fles.push({
            //         type: file.lang,
            //         name: file.name,
            //         extension: file.format,
            //         saved: false,
            //         active: index === 0 ? true : false,
            //         token: file.filetoken
            //     })
            // })

            // setFiles(fles);

            var content = decode(data.content);

            setinitialValue(content)
            setcmvalue(content)
            var lng = null;

            if (data.lang === "html") { lng = langs.html({ config: { matchClosingTags: true, autoCloseTags: true } }) }
            else if (data.lang === "css") { lng = langs.less() }
            else if (data.lang === "js") { lng = langs.javascript() }
            else if (data.lang === "jsx") { lng = langs.javascript({ config: { jsx: true } }) }
            else if (data.lang === "ts") { lng = langs.javascript({ config: { typescript: true } }) }
            else if (data.lang === "tsx") { lng = langs.javascript({ config: { typescript: true, jsx: true } }) }
            else if (data.lang === "markdown") { lng = langs.markdown() }
            else if (data.lang === "python") { lng = langs.python() }
            else if (data.lang === "json") { lng = langs.json() }
            else if (data.lang === "php") { lng = langs.php() }
            else { lng = null }
            setLang(lng);
        })
      }, [filetoken])      
      
    const content = (
        <>
            <SideBar title={projectInfo.name} />
            <div className="content">
                <div className="files">
                        {files.map(elem => (
                            
                                <ContextMenu cmenucontent={
                                    <>
                                        <CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=food-pizza" title="Pizza" action={() => { alert("click") }} desc="pizzas ricas" />
                                        <CmenuElement icon="https://xploit.men/scdn/?fluenticons&name=animal-cat" title="relleno rellenero" action={() => { alert("click2") }} desc="Gatito miau" />
                                    </>
                                }>
                                    <div className={`file${elem.active ? " active" : ""}`} key={elem.token} id={elem.token} onClick={() => {href("#/"+elem.token+"/")}}>
                                        <img src={`https://${window.location.host}/airaicons/${elem.type}.svg`} loading="lazy" alt="" style={{ width: "20px" }} />
                                        <b>{elem.name}.{elem.extension}</b>
                                        <span className="file-saved">
                                            <div className="unsaved-file" style={elem.saved ? { opacity: 0 } : null} />
                                        </span>
                                        <span className="file-close">
                                            <img src="https://xploit.men/scdn/?fluenticons&name=dismiss" width="10px" height="10px" loading="lazy" alt="×" />
                                        </span>
                                    </div>
                                </ContextMenu>
                        ))}
                </div>
                <div className="content-left">
                    <style>{":root, * {--sb-width: 28vw!important;} .content {padding: 20px; gap: 10px} .ͼ16.cm-focused .cm-selectionBackground .ͼ16 .cm-selectionLayer .cm-selectionBackground {background: #243047 !important;} .cm-editor, .cm-editor * {font-size: var(--editor-font-size);} .cm-editor, .cm-editor * {font-family: var(--editor-font-family);} .editorcontainer {position: relative;}"}</style>
                    <div className="editorcontainer">
                        <CodeMirror
                            extensions={extensionsarray}
                            value={initialValue}
                            theme={airatheme}
                            basicSetup={{ autocompletion: false }}
                            onChange={onChange}
                        />
                        <div className="cm-info" id="cm-info">
                            {cminfo}
                            <div className="cm-info-right">
                                {lang ? lang.language.name : <></>}
                            </div>
                            {
                                document.querySelector(".file.active") ? 
                                        document.querySelector(".file.active").innerText.split(".")[0] === "package" ? 
                                        (
                                            <div className="cm-info-right">
                                                Version Lens
                                            </div>
                                        ) :
                                        (<></>)
                                
                                :
                                (<></>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return <>{content}</>;
}
