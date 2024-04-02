import { Ic_Outline_DocumentMultiple, Ic_Filled_DocumentMultiple } from "../../utils/fluenticons";

export default function Toolbar() {


    function click(elem) {
        if(!elem.classList.contains("codium-toolbaritem-active")) {
            var name = elem.getAttribute("name");
            window.location.href = "#" + name;
            elem.classList.add("codium-toolbaritem-active");
        }
    }

    return (
        <div className="codium-toolbar">
            <div className="codium-toolbaritem" onClick={() => {click(this)}} name="files">
                <Ic_Outline_DocumentMultiple id="files" />
                <div className="codium-toolbaritem-svg-active" style={{display: "none"}}>
                    <Ic_Filled_DocumentMultiple id="files-active" />
                </div>
            </div>
            <div className="codium-spacer"></div>
        </div>
    )
}