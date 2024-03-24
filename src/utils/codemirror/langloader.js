export default function langLoader(lang, langs) {

    var lng = null;
    
    if (lang === "html") { lng = langs.html({ config: { matchClosingTags: true, autoCloseTags: true } }) }
    else if (lang === "css") { lng = langs.less() }
    else if (lang === "js") { lng = langs.javascript() }
    else if (lang === "jsx") { lng = langs.javascript({ config: { jsx: true } }) }
    else if (lang === "ts") { lng = langs.javascript({ config: { typescript: true } }) }
    else if (lang === "tsx") { lng = langs.javascript({ config: { typescript: true, jsx: true } }) }
    else if (lang === "markdown") { lng = langs.markdown() }
    else if (lang === "python") { lng = langs.python() }
    else if (lang === "json") { lng = langs.json() }
    else if (lang === "php") { lng = langs.php() }
    else { lng = null }
    return lng
}