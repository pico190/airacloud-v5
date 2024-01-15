import React from 'react';

import { SideBar } from './editorc/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import Monaco from '@monaco-editor/react';

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
        return (
            <>
            <SideBar title="a" >patatas</SideBar>
            <div className="content">
                <Monaco 
                height="100%"
                width="100%"
                onChange={() => {}}
                onMount={() => {loadEditor()}}
                theme="vs-dark" 
                options={{
                    contextMenus: false
                }}
                defaultLanguage="php" />
            </div>
            </>
        )
}