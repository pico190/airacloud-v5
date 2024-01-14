
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
                                    <Button children={element.name} id={element.id} icon={element.type} icontype="airaicon" />
                                )
                            }
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

function NoProjects({ }) {
    return (
        <div className="content-noprojects">
            <h1>Create your first project</h1>
            <button className="button-1">
                Create project
            </button>
        </div>
    )
}

function Projectssection({ }) {
    return (
        <div className="home-section">
                <font className="home-section-title"><Text id="content.section.projects" /></font>
                <div className="recent-activity">
                    <Button icon="folder_create" icontype="fluent" >
                        <Text id="general.createproject" />
                    </Button>
                </div>
                <Projects />
        </div>
    )
}





export function Content({ sidinfo }) {
    var content = <><Recent sidinfo={sidinfo} /><Projectssection sidinfo={sidinfo} /></>
    var alluserprojects = JSON.parse(decode(gcookie("DATA__PROJECTS")));
    
    alluserprojects.length === 0 ? content = <NoProjects /> : void(0);

    return (
        <div className="content">
            <h1 className="contentTitle"><Text id="content.welcome" var1={sidinfo.name} /></h1>
            {
                content
            }
        </div>
    )
}
