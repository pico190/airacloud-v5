import { jsxtostr } from "../generalfuncs";




export function createProject() {

    var modalcontainer = document.getElementById("modal");

    modalcontainer.style.display = "";
    modalcontainer.classList.remove("modal-container-close")


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
                    <img src="https://xploit.men/scdn/?fluenticons&amp;name=code" loading="lazy" alt="" width="30" />
                    <select>
                        <option value="" disabled selected>Choose your language...</option>
                        <option value="htmlcssjs">HTML, CSS & JS</option>
                        <option value="py">Python</option>
                        <option value="lua">Lua</option>
                        <option value="js">JavaScript</option>
                        <option value="bf">BrainFuck</option>
                    </select>
                </div>
                <div className="modal-form-input">
                    <img src="https://xploit.men/scdn/?fluenticons&amp;name=globe" loading="lazy" alt="" width="30"/>
                    <select>
                        <option value="public" selected>Public</option>
                        <option value="private">Private</option>
                        <option value="invite">Invite-only</option>
                    </select>
                </div>
            </div>
            <div className="modal-continue-button">
                <button type="submit" className=".button-primary">
                    Next
                    <img src="https://xploit.men/scdn/?fluenticons&amp;name=chevron_right" loading="lazy" alt="" width="30"/>
                </button>
            </div>
            </div>

    ).replace(`vanillahtml="load"`, `onclick="document.getElementById('modal').innerHTML = ''; document.getElementById('modal').classList.add('modal-container-close')"`)


}
