
import { Button } from './contentc/Buttons'
import { gcookie } from '../../utils/CookieParser.js';
import { decode } from 'js-base64';

import { Text } from '../../utils/translates/text.js';
import { Projects } from './contentc/projects.js';
import { createProject } from '../../utils/ui/createProject.js';

function Recent() {
    var alluserprojects = JSON.parse(decode(gcookie("DATA__PROJECTS")));
    var recentactivity = (
        
        <div className="home-section">
                <font className="home-section-title"><Text id="content.section.recentactivity" /></font>
                <div className="recent-activity">
                    {
                        alluserprojects.map(element => {
                            if(element.recent) {
                                return (
                                    <Button children={element.name} id={element.id} icon={element.type} icontype="airaicon" />
                                )
                            } return (<></>);
                        })
                    }
                </div>
        </div>
    )
    if (!alluserprojects.some(obj => obj.recent === true)) {
        recentactivity = (<></>);
    }
    
    return (
        <>
        {
            recentactivity
        }
        </>
    )
}

function NoProjects() {
    return (
        <div className="content-noprojects">
            <h1><Text id="content.noproject.title" /></h1>
            <button className="button-primary" style={{transform: "scale(0.88)"}}>
            <Text id="general.createproject" />
            </button>
        </div>
    )
}

function Projectssection() {
    return (
        <div className="home-section">
                <font className="home-section-title"><Text id="content.section.projects" /></font>
                <div className="recent-activity">
                    <Button icon="folder_create" icontype="fluent" onClick={() => {createProject()}}>
                        <Text id="general.createproject" />
                    </Button>
                </div>
                <Projects />
        </div>
    )
}





export function Content({ sidinfo }) {
    var content = <><h1 className="contentTitle"><Text id="content.welcome" var1={sidinfo.name} /></h1><Recent sidinfo={sidinfo} /><Projectssection sidinfo={sidinfo} /></>
    var alluserprojects = JSON.parse(decode(gcookie("DATA__PROJECTS")));
    
    var noprojects_ = "";

    alluserprojects.length === 0 ? content = <NoProjects /> : void(0);
    alluserprojects.length === 0 ? noprojects_ = " noprojects" : void(0);


    return (
        <div className={"content" + noprojects_}>
            {
                content
            }
        </div>
    )
}
