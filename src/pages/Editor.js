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
        var testPhpCode = `<?php
$a = "patatas";
?>

<h1><?php echo $a; ?></h1>`
        return (
            <Monaco 
            height="100vh" 
            theme="vs-dark" 
            defaultLanguage="php" 
            defaultValue={testPhpCode} />
        )
    }
}