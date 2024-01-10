
import { Button } from './contentc/Buttons'
import { gcookie } from '../../utils/CookieParser.js';
import { decode } from 'js-base64';

import { Projects } from './contentc/projects.js';

function Recent({ }) {
    var alluserprojects = JSON.parse(decode(gcookie("DATA__PROJECTS")));
    return (
        <div className="home-section">
                <font className="home-section-title">Recent activity</font>
                <div className="recent-activity">
                    {
                        alluserprojects.map(element => {
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

function Projectssection({ }) {
    return (
        <div className="home-section">
                <font className="home-section-title">All your projects</font>
                <div className="recent-activity">
                    <Button icon="folder_create" icontype="fluent" name="Create a project" />
                </div>
                <Projects />
        </div>
    )
}





export function Content({ sidinfo }) {
    return (
        <div className="content">
            <h1 className="contentTitle">Welcome, {sidinfo.name}!</h1>
            <Recent sidinfo={sidinfo} />
            <Projectssection sidinfo={sidinfo} />
        </div>
    )
}
