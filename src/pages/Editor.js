import React from 'react';

import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'
import { LoadWeb } from '../utils/LoadWeb'

import Monaco from '@monaco-editor/react';

export function Editor({urlparsed, sidinfo}) {
    if(urlparsed[1].length<=0) {
        return (
            <LoadWeb url="https://airacloud-v5.vercel.app/notfound.html" />
        )
    } else {
        return (
            <Monaco height="100px" defaultLanguage="javascript" defaultValue="// some comment" />
        )
    }
}