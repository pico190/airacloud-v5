import React from 'react';

import { SideBar } from './editorc/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
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
                    <style children=":root, * {--sb-width: 28%!important;}" />
                    
                    <CodeMirror
                    value="console.log('hello world!');"
                    height="200px"
                    theme={vscodeDark}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
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