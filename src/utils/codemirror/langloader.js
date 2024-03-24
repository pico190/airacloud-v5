export default function langLoader(lang, langs) {

    var lng = null;
    
    if (lang === "html") { lng = langs.html({ config: { matchClosingTags: true, autoCloseTags: true } }); document.getElementById("langstyle").innerHTML = "* {--cm-tag-name: var(--cm-tag-name-standard)!important;}" }
    else if (lang === "css") { lng = langs.less() }
    else if (lang === "js") { lng = langs.javascript() }
    else if (lang === "jsx") { lng = langs.jsx() }
    else if (lang === "ts") { lng = langs.typescript() }
    else if (lang === "tsx") { lng = langs.tsx() }
    else if (lang === "markdown") { lng = langs.markdown() }
    else if (lang === "python") { lng = langs.python() }
    else if (lang === "json") { lng = langs.json() }
    else if (lang === "php") { lng = langs.php() }
    else if (lang === "java") { lng = langs.java() }
    else if (lang === "swift") { lng = langs.swift() }
    else if (lang === "kotlin") { lng = langs.kotlin() }
    else if (lang === "sql") { lng = langs.sql() }
    else if (lang === "rust") { lng = langs.rust() }
    else if (lang === "lua") { lng = langs.lua() }
    else { lng = null }
    return lng;
}