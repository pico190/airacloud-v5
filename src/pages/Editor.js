import React from 'react';
import { useEffect, useMemo, useRef } from 'react';

import { SideBar } from './editorc/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { color, colorView, colorTheme } from '@uiw/codemirror-extensions-color';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';
import { useCodeMirror } from '@uiw/react-codemirror';

import { vscodeDark } from '@uiw/codemirror-theme-vscode';


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
        var fontsize_ = "20";
        var fontfamily_ = "20";

        const algorithm  = useSelector(state => state.algorithm); 
        const code = algorithm.code ? algorithm.code : '//Select an algorithm';
    
        const editor = useRef(); 
    
        const [ codeValue, setCodeValue ] = useState(code);
    
        const handleAlgoChange = (e) => {
            setCodeValue(e)
        }
    
        const { setContainer } = useCodeMirror({
            container: editor.current,
            extensions: [javascript()],
            value: codeValue, 
            theme: oneDark,
            onChange: handleAlgoChange,
            height: '100%',
        });
    
        useEffect(() => {
            if (editor.current) {
                setContainer(editor.current);
            }
        }, [editor.current]);
    
    
    
        return (
            <>
            <SideBar title="Codemirror Playground" >
                    <div style={{display: "flex", gap: "10px"}}>
                        <img src={'https://'+window.location.host+'/airaicons/'+urlparsed[1]+'.svg'} loading="lazy" alt="" style={{width: "20px"}} />
                        <span>{urlparsed[1]}</span>
                    </div>
            </SideBar>
            <div className="content">
                <div className="content-left">
                    <style children=":root, * {--sb-width: 28%!important;} .content {padding: 20px;}" />
                    <style children={`.cm-editor, .cm-editor * {font-size: ${fontsize_}px;}`} id="fontsize" />         
                    <style children={`.cm-editor, .cm-editor * {font-family: ${fontfamily_}px;}`} id="fontfamily" />
                    
                    <div ref={editor} />
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