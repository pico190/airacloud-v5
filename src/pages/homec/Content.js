
function Recent() {

    function Button({ name }) {
        return (
            <div className="default-content-button">
                <b>
                    {name}
                </b>
                <img src="https://xploit.men/scdn/?fluenticons&amp;name=chevron-right&amp;type=fluent&amp;fill=white" loading="lazy" alt=""/>
            </div>
        )
    }



    return (
        <div style={{marginTop: "15px"}}>
                <font style={{fontSize: "30px", textDecoration: "underline"}}>Recent activity</font>
                <div className="recent-activity">
                    <Button name="AiraCloud en Astro" />
                    <Button name="Nature Porn" />
                    <Button name="Swiftly Team" />
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