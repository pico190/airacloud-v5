import { jsxtostr } from "../generalfuncs";




export function createProject() {

    var modalcontainer = document.getElementById("modal");

    modalcontainer.style.display = "";
    modalcontainer.classList.remove("close")


    modalcontainer.innerHTML = jsxtostr(


            <div className="modal">
            <div className="modal-title">
                <h1>Create a project</h1>
                <div className="close" vanillahtml="load">
                    <img width="30" src="https://xploit.men/scdn/?fluenticons&amp;name=dismiss" loading="lazy" alt="" />
                </div>
            </div>
            <div className="modal-form">
                <div className="modal-form-input">
                    <img src="https://xploit.men/scdn/?fluenticons&amp;name=text" loading="lazy" alt="" width="30" />
                    <input placeholder="Name your project..." />
                </div>
                <div className="modal-form-input">
                    <img src="https://xploit.men/scdn/?fluenticons&amp;name=text" loading="lazy" alt="" width="30" />
                    <select></select>
                </div>
                <div className="modal-form-input">
                    <img src="https://xploit.men/scdn/?fluenticons&amp;name=text" loading="lazy" alt="" width="30"/>
                    <select></select>
                </div>	
            </div>
            </div>

    ).replace(`vanillahtml="load"`, `onclick="document.getElementById('modal').innerHTML = ''; document.getElementById('modal').classList.add("close")"`)


}