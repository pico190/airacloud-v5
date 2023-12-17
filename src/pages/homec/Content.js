
import { Button } from './contentc/Buttons'

function Recent() {
    return (
        <div className="home-section">
                <font style={{fontSize: "30px", textDecoration: "underline", textDecorationThickness: "0.1px"}}>Recent activity</font>
                <div className="recent-activity">
                    <Button icon="astro" icontype="airaicon" name="AiraCloud en Astro" />
                    <Button icon="react" icontype="airaicon" name="Nature Porn" />
                    <Button icon="people_team" icontype="fluent" name="Swiftly Team" />
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
                <font style={{fontSize: "30px"}}>All your projects</font>

            </div>
        </div>
    )
}
