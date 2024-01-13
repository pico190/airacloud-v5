
import { Button } from './contentc/Buttons'
import { gcookie } from '../../utils/CookieParser.js';
import { decode } from 'js-base64';

import { Text } from '../../utils/translates/text.js';
import { Projects } from './contentc/projects.js';

function Recent({ }) {
    var alluserprojects = JSON.parse(decode(gcookie("DATA__PROJECTS")));
    var recentactivity = (
        
        <div className="home-section">
                <font className="home-section-title"><Text id="content.section.recentactivity" /></font>
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
    if(!alluserprojects.every(obj => obj.recent === true)) {
        recentactivity = (<></>)
    }
    return (
        <>
        {
            recentactivity
        }
        </>
    )
}

function Projectssection({ }) {
    return (
        <div className="home-section">
                <font className="home-section-title"><Text id="content.section.projects" /></font>
                <div className="recent-activity">
                    <Button icon="folder_create" icontype="fluent" name="general.createproject" />
                </div>
                <Projects />
        </div>
    )
}





export function Content({ sidinfo }) {
    return (
        <div className="content">
            <h1 className="contentTitle"><Text id="content.welcome" var1={sidinfo.name} /></h1>
            <Recent sidinfo={sidinfo} />
            <Projectssection sidinfo={sidinfo} />
        </div>
    )
}
