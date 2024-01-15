import React, { useRef } from 'react';

import { SideBar } from './editorc/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import Monaco, { loader } from '@monaco-editor/react';

export function Editor({urlparsed, sidinfo}) {
                    try {
                        var projectId = urlparsed[1];
                        if(projectId.length === 0) {
                            projectId = "none";
                            return (
                                <LoadWeb url="https://airacloud-v5.vercel.app/notfound.html" />
                            )
                        }
                    } catch(err) {
                        var projectId = "none";
                        return (
                            <LoadWeb url="https://airacloud-v5.vercel.app/notfound.html" />
                        )
                    }

        const editorRef = useRef(null);
        
        function loadEditor(editor, monaco) {
            editorRef.current = editor;
            var content = document.getElementsByClassName("content")[0];
            content.style.padding = "18px";
        }    
        function change() {
            var iframe = document.getElementById("iframe-1")
            iframe.innerHTML = editorRef.current.getValue();

        }
        loader.init().then((monaco) => {
            monaco.editor.defineTheme('airadefault', {
                base: 'vs-dark',
                inherit: true,
                rules: [],
                colors: {
                    'editor.background': '#16191E',
                },
            });
        });
        return (
            <>
            <SideBar title="Monaco Playground" >patatas</SideBar>
            <div className="content">
                <div className="content-left">
                    <style children=":root, * {--sb-width: 28%!important;}" />
                    <Monaco 
                    height="100%"
                    width="100%"
                    onChange={change}
                    onMount={loadEditor}
                    theme="airadefault" 
                    options={{
                        contextmenu: false,
                        cursorBlinking: "smooth",
                        autoIndent: true,
                        fontSize: "16px",
                        smoothScrolling: true,
                        dragAndDrop: true
                    }}
                    defaultLanguage={urlparsed[1]} />
                    <div className="iframe">
                        <div className="url">
                            https://sexo.com/
                        </div>
                        <iframe id="iframe-1"></iframe>
                    </div>
                </div>
            </div>
            </>
        )
}