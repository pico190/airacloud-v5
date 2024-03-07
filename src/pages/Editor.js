import React, { useEffect, useState} from "react";

import { SideBar } from './editorc/Sidebar'
// import { LoadWeb } from '../utils/LoadWeb'

import { encode, decode } from 'js-base64'

import CodeMirror from '@uiw/react-codemirror';

import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { php } from '@codemirror/lang-php';
import { sql } from '@codemirror/lang-sql';
import { markdown } from '@codemirror/lang-markdown';

import { color } from '@uiw/codemirror-extensions-color';
import { spaces } from "../utils/generalfuncs";
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

import { CmenuElement, ContextMenu } from "../utils/contextmenu";

import { airatheme } from "../utils/codemirror/airatheme";
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
            Array.from(document.querySelectorAll('.cm-selectionMatch')).forEach(elem => {spaces(elem.innerText) ? elem.classList.add("cm-spacematch") : elem.classList.remove("cm-spacematch")})
            
            // Update token
            seteditorToken(getEditorToken());

            // IntelliBox Position
            // var cursor = document.getElementsByClassName("cm-cursor")[0]
            // var intellicontainer = document.getElementById("intellisense")
            // var editor = document.getElementsByClassName("cm-editor")[0]

            // if(!editor.classList.contains("cm-focused") || document.getElementsByClassName("cm-selectionBackground")[0] || intelliContent === "") {
            //     intellicontainer.style.display="none"
            // } else {
            //     intellicontainer.style.display="flex"
            //     intellicontainer.style.left = cursor.offsetLeft + "px"
            //     intellicontainer.style.top = cursor.offsetTop + "px"
            // }


        }, 100)
        // setInterval(() => {
            
        //     var htmltags = []
        //     reference.forEach(htmltag => {htmltags.push(htmltag.name)})

        //     document.querySelectorAll("span").forEach(elem => {
        //         if(htmltags.includes(elem.innerText) && elem.className.includes("ͼ") && elem.nextElementSibling.innerText.includes(">")) {
        //             elem.classList.add("_cTagExistent")
        //         }
        //     })
        // }, 1)

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
    
        /*
        * default html: --- html({ config:{matchClosingTags: true, autoCloseTags: true } })
        * default jsx: ---
        * 
        */




        const [value, setValue] = React.useState(`# Header 1 #
        ## Header 2 ##
        ### Header 3 ###             (Hashes on right are optional)
        ## Markdown plus h2 with a custom ID ##   {#id-goes-here}
        [Link back to H2](#id-goes-here)
        
        \`\`\`js
        var x = "string";
        function f() {
          return x;
        }
        \`\`\`
        
        <!-- html madness -->
        <div class="custom-class" markdown="1">
          <div>
            nested div
          </div>
          <script type='text/x-koka'>
            function( x: int ) { return x*x; }
          </script>
          This is a div _with_ underscores
          and a & <b class="bold">bold</b> element.
          <style>
            body { font: "Consolas" }
          </style>
        </div>
        
        * Bullet lists are easy too
        - Another one
        + Another one
        
        This is a paragraph, which is text surrounded by
        whitespace. Paragraphs can be on one
        line (or many), and can drone on for hours.
        
        Now some inline markup like _italics_,  **bold**,
        and \`code()\`. Note that underscores
        in_words_are ignored.
        
        \`\`\`\`application/json
          { value: ["or with a mime type"] }
        \`\`\`\`
        
        > Blockquotes are like quoted text in email replies
        >> And, they can be nested
        
        1. A numbered list
        2. Which is numbered
        3. With periods and a space
        
        And now some code:
        
            // Code is just text indented a bit
            which(is_easy) to_remember();
        
        And a block
        
        ~~~
        // Markdown extra adds un-indented code blocks too
        
        if (this_is_more_code == true && !indented) {
            // tild wrapped code blocks, also not indented
        }
        ~~~
        
        Text with
        two trailing spaces
        (on the right)
        can be used
        for things like poems
        
        ### Horizontal rules
        
        * * * *
        ****
        --------------------------
        
        ![picture alt](/images/photo.jpeg "Title is optional")
        
        ## Markdown plus tables ##
        
        | Header | Header | Right  |
        | ------ | ------ | -----: |
        |  Cell  |  Cell  |   $10  |
        |  Cell  |  Cell  |   $20  |
        
        * Outer pipes on tables are optional
        * Colon used for alignment (right versus left)
        
        ## Markdown plus definition lists ##
        
        Bottled water
        : $ 1.25
        : $ 1.55 (Large)
        
        Milk
        Pop
        : $ 1.75
        
        * Multiple definitions and terms are possible
        * Definitions can include multiple paragraphs too
        
        *[ABBR]: Markdown plus abbreviations (produces an <abbr> tag)`);
        const onChange = React.useCallback((val, viewUpdate) => {
          console.log('val:', val);
          setValue(val);
        }, []);
      

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
                        {/* <div id="intellisense" className="intellisense" >
                            <div id="intelli">{intelliContent}</div>
                            <div id="intellidesc" dangerouslySetInnerHTML={{__html: intelliDesc}}></div>
                        </div> */}
                        <CodeMirror
                            extensions={[markdown(), hyperLink, color]}
                            value={value}
                            theme={airatheme}
                            options={{
                                autocompletion: false
                            }}
                            onChange={onChange}
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