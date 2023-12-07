
export function Button({ icon, icontype, name }) {
    if(icontype === "airaicon") {
        var iconurl = `https://airacloud-v5.vercel.app/airaicons/${icon}.svg`;
    } else {
        var iconurl = `https://xploit.men/scdn/?fluenticons&amp;name=${icon}&amp;type=fluent&amp;fill=white`;
    }
    
    return (
        <div className="default-content-button">
            <img src={iconurl} loading="lazy" alt="" width="32px" height="32px" style={{marginRight: "9px"}} />
            <b className="content-button-text">
                {name}
            </b>
            <div className="spacer" />
            <img src="https://xploit.men/scdn/?fluenticons&amp;name=chevron-right&amp;type=fluent&amp;fill=white" loading="lazy" alt=""/>
        </div>
    )
}