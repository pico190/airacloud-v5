import { ic_fluent_document_multiple_24_regular, ic_fluent_document_multiple_24_filled } from "../../utils/fluenticons";
import { jsxtostr } from "../../utils/generalfuncs";

export default function Toolbar() {


    function click(elem) {
        if(!elem.classList.contains("codium-toolbaritem-active")) {
            var name = elem.getAttribute("name");
            window.location.href = "#" + name;
            if(name == "files") {elem.innerHTML = jsxtostr(<ic_fluent_document_multiple_24_filled id="files" />)}
            elem.classList.add("codium-toolbaritem-active");
        }
    }

    return (
        <div className="codium-toolbar">
            <div className="codium-toolbaritem" onClick={() => {click(this)}} name="files">
                <ic_fluent_document_multiple_24_regular id="files" />
            </div>
            <div className="codium-spacer"></div>
        </div>
    )
}