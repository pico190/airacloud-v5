
function Recent() {

    function Button({ icon, icontype, name }) {
        if(icontype === "airaicon") {
            var iconurl = `https://airacloud-v5.vercel.app/airaicons/${icon}.svg`;
        } else {
            var iconurl = `https://xploit.men/scdn/?fluenticons&amp;name=${icon}&amp;type=fluent&amp;fill=white`;
        }
        
        return (
            <div className="default-content-button">
                <img src={iconurl} loading="lazy" alt="" />
                <b className="content-button-text">
                    {name}
                </b>
                <div className="spacer" />
                <img src="https://xploit.men/scdn/?fluenticons&amp;name=chevron-right&amp;type=fluent&amp;fill=white" loading="lazy" alt=""/>
            </div>
        )
    }



    return (
        <div style={{marginTop: "15px"}}>
                <font style={{fontSize: "30px", textDecoration: "underline"}}>Recent activity</font>
                <div className="recent-activity">
                    <Button icon="astro" icontype="airaicon" name="AiraCloud en Astro" />
                    <Button icon="astro" icontype="airaicon" name="Nature Porn" />
                    <Button icon="astro" icontype="airaicon" name="Swiftly Team" />
                </div>
        </div>
    )
}






export function Content() {
    return (
        <div className="content">
            <h1 className="contentTitle">Welcome, Optix!</h1>
            <Recent />
            <div style={{marginTop: "15px"}}>
                <font style={{fontSize: "30px", textDecoration: "underline", marginTop: "15px"}}>All your projects</font>

            </div>
        </div>
    )
}