
import { Button } from './contentc/Buttons'

function Recent({ sidinfo }) {
    return (
        <div className="home-section">
                <font className="home-section-title">Recent activity</font>
                <div className="recent-activity">
                    {
                        sidinfo.projects.map(element => {
                            if(element.recent) {
                                return (
                                    <Button id={element.id} icon={element.type} icontype="airaicon" name={element.name} />
                                )
                            }
                        })
                    }
                </div>
        </div>
    )
}

function Projects({ sidinfo }) {
    return (
        <div className="home-section">
                <font className="home-section-title">All your projects</font>
                <div className="recent-activity">
                    <Button icon="folder_create" icontype="fluent" name="Create a project" />
                </div>
        </div>
    )
}





export function Content({ sidinfo }) {
    return (
        <div className="content">
            <h1 className="contentTitle">Welcome, Optix!</h1>
            <Recent sidinfo={sidinfo} />
            <Projects sidinfo={sidinfo} />
        </div>
    )
}
