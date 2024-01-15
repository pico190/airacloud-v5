import React from 'react';

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

        function loadEditor() {
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
            monaco.editor.defineTheme('picobsidian', {
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
                <Monaco 
                height="100%"
                width="100%"
                onChange={() => {}}
                onMount={() => {loadEditor()}}
                theme="airadefault" 
                options={{
                    contextmenu: false,
                    cursorBlinking: "smooth",
                    autoIndent: true,
                    fontSize: "18px",
                    smoothScrolling: true,
                    dragAndDrop: true
                }}
                defaultLanguage="php" />
            </div>
            </>
        )
}