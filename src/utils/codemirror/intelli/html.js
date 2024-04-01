
export default function htmlIntelli(editorToken) {
    var intellisense = document.getElementById("intellisense");
    console.log(editorToken)
    var editor = document.querySelector(".cm-editor")

    if(editor) {
        if(editor.classList.contains("cm-focused")) {

            intellisense.innerHTML = ``;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
            intellisense.innerHTML += `<div class="intellitem"><b>${editorToken}</b></div>`;
        
        } else {
            intellisense.innerHTML = ""
        }
    }
}