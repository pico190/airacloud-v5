import { jslint, csslint, jsonlint, phplint, editorislang } from "../utils/codemirror/intelli/html";
import phpLinter from "../utils/codemirror/lints/php";
import cssLinter from "../utils/codemirror/lints/css";
import jsLinter from "../utils/codemirror/lints/js";
import jsonLinter from "../utils/codemirror/lints/json";

export default function loadLint(val) {
    if(editorislang(phplint)) {
        phpLinter(val, setErrors);
    }
    if(editorislang(csslint)) {
        cssLinter(val, setErrors);
    }
    if(editorislang(jslint)) {
        jsLinter(val, setErrors);
    }
    if(editorislang(jsonlint)) {
        jsonLinter(val, setErrors);
    }
}