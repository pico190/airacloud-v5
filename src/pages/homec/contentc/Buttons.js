export function Button({ children, icon, icontype }) {
    var iconurl;
    if(icontype === "airaicon") {
        iconurl = `https://`+window.location.host+`/airaicons/${icon}.svg`;
    } else {
        iconurl = `https://xploit.men/scdn/?fluenticons&name=${icon}&type=fluent&fill=white`;
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