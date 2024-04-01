// Intelli
export var htmlintelli = ["php", "html", "jsx", "javascript"];
                    
// Lint
export var jslint = ["js", "jsx", "javascript"];
export var csslint = ["css", "less"];
export var jsonlint = ["json"];
export var phplint = ["php"];

export function editorislang(array) { return array.includes(document.querySelector(".cm-content").getAttribute("data-language")) }