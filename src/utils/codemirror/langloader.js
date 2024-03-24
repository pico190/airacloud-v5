import { decode } from 'js-base64'

export default function langLoader(lang, langs) {

    var lng = null;
    var marketplace = JSON.parse(decode(localStorage.getItem("DATA__MARKETPLACE")));
    console.log(marketplace)
    
    if (lang === "html") { 
        var htmlconfig = { matchClosingTags: true, autoCloseTags: true, nestedLanguages: [] }

        if(marketplace.pyscript) {
            htmlconfig.nestedLanguages.push({
                tag: 'py-script',
                parser: langs.python()
            })
            htmlconfig.nestedLanguages.push({
                tag: 'py-config',
                parser: langs.json()
            })
        }
        lng = langs.html({ config: htmlconfig }); 
        document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" 
    }
    else if (lang === "css") { lng = langs.less() }
    else if (lang === "js") { lng = langs.javascript() }
    else if (lang === "jsx") { lng = langs.jsx() }
    else if (lang === "ts") { lng = langs.typescript() }
    else if (lang === "tsx") { lng = langs.tsx() }
    else if (lang === "markdown") { lng = langs.markdown(); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else if (lang === "python") { lng = langs.python() }
    else if (lang === "json") { lng = langs.json() }
    else if (lang === "php") { lng = langs.php() }
    else if (lang === "java") { lng = langs.java() }
    else if (lang === "swift") { lng = langs.swift() }
    else if (lang === "kotlin") { lng = langs.kotlin() }
    else if (lang === "sql") { lng = langs.sql() }
    else if (lang === "rust") { lng = langs.rust() }
    else if (lang === "lua") { lng = langs.lua() }
    else if (lang === "angular") { lng = langs.angular(); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else { lng = null }
    return lng;
}