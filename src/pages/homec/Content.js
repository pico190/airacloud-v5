
import { Button } from './contentc/Buttons'

function Recent({ sidinfo }) {
    return (
        <div className="home-section">
                <font className="home-section-title">Recent activity</font>
                <div className="recent-activity">
                    <Button icon="astro" icontype="airaicon" name="AiraCloud en Astro" />
                    <Button icon="react" icontype="airaicon" name="Nature Porn" />
                    <Button icon="people_team" icontype="fluent" name="Swiftly Team" />
                </div>
        </div>
    )
}






export function Content({ sidinfo }) {
    return (
        <div className="content">
            <h1 className="contentTitle">Welcome, Optix!</h1>
            <Recent />
            <div className="home-section">
                    <font className="home-section-title">All your projects</font>
            </div>
        </div>
    )
}
