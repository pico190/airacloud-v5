import { jslint, csslint, jsonlint, phplint, editorislang } from "../langs";
import phpLinter from "./php";
import cssLinter from "./css";
import jsLinter from "./js";
import jsonLinter from "./json";

export default function loadLint(val, setErrors) {
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