export function Button({ children, icon, icontype }) {
    if(icontype === "airaicon") {
        var iconurl = `https://airacloud-v5.vercel.app/airaicons/${icon}.svg`;
    } else {
        var iconurl = `https://xploit.men/scdn/?fluenticons&name=${icon}&type=fluent&fill=white`;
    }
    
    return (
        <div className="default-content-button">
            <img src={iconurl} loading="lazy" alt="" width="32px" height="32px" style={{marginRight: "9px"}} />
            <b className="content-button-text">
                {children}
            </b>
            <div className="spacer" />
            <img src="https://xploit.men/scdn/?fluenticons&name=chevron-right&type=fluent&fill=white" loading="lazy" alt=""/>
        </div>
    )
}