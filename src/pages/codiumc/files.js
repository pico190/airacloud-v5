function File({file, icon, extension, isEditor=false}) {
    return (
        <div className={`codium-file ${isEditor ? "codium-editor-file" : ""}`}>
            <img src={`/airaicons/${icon}.svg`} loading="lazy" alt="" />
            <span>{file}.{extension}</span>
        </div>
    )
}

export default function Files() {
    return (
        <>
            <div className="codium-files">
                <File file="airacloud" icon="react" extension="jsx" />
                <File file="README" icon="markdown" extension="md" />
            </div>
            <div className="codium-editor">
                <div className="codium-editor-files">
                    <File file="airacloud" icon="react" extension="jsx" />
                    <File file="README" icon="markdown" extension="md" />
                </div>
            </div>
        </>
    )
}