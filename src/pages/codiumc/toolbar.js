import { Ic_Outline_DocumentMultiple, Ic_Filled_DocumentMultiple } from "../../utils/fluenticons";
import { jsxtostr } from "../../utils/generalfuncs";

export default function Toolbar() {


    function click(elem) {
        if(!elem.classList.contains("codium-toolbaritem-active")) {
            var name = elem.getAttribute("name");
            window.location.href = "#" + name;
            if(name == "files") {elem.innerHTML = jsxtostr(<Ic_Filled_DocumentMultiple id="files" />)}
            elem.classList.add("codium-toolbaritem-active");
        }
    }

    return (
        <div className="codium-toolbar">
            <div className="codium-toolbaritem" onClick={() => {click(this)}} name="files">
                <Ic_Outline_DocumentMultiple id="files" />
            </div>
            <div className="codium-spacer"></div>
        </div>
    )
}