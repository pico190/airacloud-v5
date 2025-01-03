
import {  langs  } from '@uiw/codemirror-extensions-langs';
import { decode } from 'js-base64';
import { pythonLanguage } from "@codemirror/lang-python";
import { jsonLanguage } from "@codemirror/lang-json";
import { html } from "@codemirror/lang-html";
import { properties } from "@codemirror/legacy-modes/mode/properties";

export default function langLoader(lang) {

    var lng = null;
    try {
        var marketplace = JSON.parse(decode(localStorage.getItem("DATA__MARKETPLACE")));
    } catch(err) {
        var marketplace = {}
    }
    console.log(marketplace)
    
    if (lang === "html") { 
        var htmlconfig = {
            matchClosingTags: true,
            autoCloseTags: true,
            nestedLanguages: []
        };
        
        if(marketplace.pyscript) {
            console.log("patata")
            htmlconfig.nestedLanguages.push({
                tag: 'pyscript',
                parser: pythonLanguage
            })
            htmlconfig.nestedLanguages.push({
                tag: 'pyconfig',
                parser: jsonLanguage
            })
        }
        lng = html({ config: htmlconfig }); 
        document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" 
    }
    else if (lang === "css") { lng = langs.less(); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else if (lang === "js") { lng = langs.javascript() }
    else if (lang === "jsx") { lng = langs.jsx() }
    else if (lang === "ts") { lng = langs.typescript() }
    else if (lang === "tsx") { lng = langs.tsx() }
    else if (lang === "markdown") { lng = langs.markdown(); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else if (lang === "python") { lng = langs.python() }
    else if (lang === "json") { lng = langs.json() }
    else if (lang === "php") { lng = langs.php(); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else if (lang === "java") { lng = langs.java() }
    else if (lang === "swift") { lng = langs.swift() }
    else if (lang === "kotlin") { lng = langs.kotlin() }
    else if (lang === "sql") { lng = langs.sql() }
    else if (lang === "rust") { lng = langs.rust() }
    else if (lang === "lua") { lng = langs.lua() }
    else if (lang === "cpp") { lng = langs.cpp() }
    else if (lang === "svg") { lng = langs.svg() }
    else if (lang === "yaml") { lng = langs.yaml() }
    else if (lang === "xml") { lng = langs.xml(); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else if (lang === "angular") { lng = langs.angular(); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else if (lang === "properties") { lng = properties; }
    else { lng = null }
    return lng;
}