import { 
    Ic_Outline_DocumentMultiple, Ic_Filled_DocumentMultiple,
    Ic_Outline_Settings, Ic_Filled_Settings
} from "../../utils/fluenticons";

export default function Toolbar() {


    function click(name) {
        var elem = document.querySelector('div.codium-toolbaritem[name="'+name+'"]');
        console.log(elem);
        if(!elem.classList.contains("codium-toolbaritem-active")) {
            var name = elem.getAttribute("name");
            window.location.href = "/codium/#" + name;
            var activelements = document.querySelectorAll(".codium-toolbaritem-active");
            activelements.forEach(activeelem => {activeelem.classList.remove("codium-toolbaritem-active")})

            elem.classList.add("codium-toolbaritem-active");
        }
    }

    var defaultName = "files";

    window.addEventListener("load", () => {
        var defaultelem = document.querySelector('div.codium-toolbaritem[name="'+defaultName+'"]');
        window.location.href = "/codium/#" + defaultName;
    })

    return (
        <div className="codium-toolbar">

            {/* Files, Default Item */}
            <div className="codium-toolbaritem" onClick={() => {click("files")}} name="files">
                <Ic_Outline_DocumentMultiple id="files" />
                <div className="codium-toolbaritem-svg-active" style={{display: "none"}}>
                    <Ic_Filled_DocumentMultiple id="files-active" />
                </div>
            </div>




            <div className="codium-spacer"></div>
            
            {/* Settings Item */}
            <div className="codium-toolbaritem" onClick={() => {click("settings")}} name="settings">
                <Ic_Outline_Settings id="files" />
                <div className="codium-toolbaritem-svg-active" style={{display: "none"}}>
                    <Ic_Filled_Settings id="files-active" />
                </div>
            </div>
        </div>
    )
}