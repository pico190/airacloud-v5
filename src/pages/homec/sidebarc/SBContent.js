import {useMousePosition} from '../../../utils/useMousePosition'
import { projectLoadBar } from '../../../utils/projectLoadBar';
import { decode } from 'js-base64';
import { Tooltip as ReactTooltip } from 'react-tooltip'

// Translates
import { Text } from '../../../utils/translates/text' 
export function SBContent({ sidinfo }) {

    // Elements
    function Title() {
        return (
            <div className="aira_logo">
                <img width="54px" src={'https://'+window.location.host+'/icon.svg'} loading="lazy" alt=""/>
                <div className="aira_logo_title">
                    <h1 style={{ height: "30px" }}>AiraCloud</h1>
                    <span>BETA</span>
                </div>
            </div>
        )
    }
    function EngineVersion() {
        return (
            <>
                <div className="sb_separator"></div>
                <div className="aira_info">
                        <img width="44px" src={'https://'+window.location.host+'/icon.svg'} loading="lazy" alt="" style={{height: "fit-content"}}/>
                        <span>
                            <font style={{fontSize: "26px", color: "#C3C3C4"}}><b>AiraCloud</b> <Text id="sb.down.release" var1="1.0" var1r="0.0" /></font>
                            <br /><font style={{fontSize: "16px", color: "#4B4C4F"}}><Text id="sb.down.engine" var1="v5.3.aquiLaBuild" var1r="v0.0" /></font>
                            {/* <br /><font style={{fontSize: "16px", opacity: "0.25"}}><Text id="sb.down.lastupdate" var1="0 seconds" />  <u><Text id="sb.down.lastupdate1" /></u></font> */}
                            <br /><font style={{fontSize: "16px", color: "#878889"}}>(c) 2024 <b>Aira</b> / Made with <img alt="" loading="lazy" src="https://xploit.men/scdn/heart.svg" width="15px" height="15px" style={{transform: "translateY(15%)"}} /> by Swiftly</font>
                        </span>
                </div>
            </>
        )
    }
    function SectionElement({children, icon}) { return ( <div className="sb_sect_tile_contained" onClick={() => {projectLoadBar(children);}}><img alt="" loading="lazy" src={`https://xploit.men/scdn/?fluenticons&name=${icon}`}/><p>{children}</p></div>)}
    function Section({children, title, id, span=""}) {
        const sectionid = id;
        const mousePosition = useMousePosition();
        function click() {
            var overlayElement = document.getElementById(sectionid+"_overlay");
            var titleElement = document.getElementById(sectionid+"_title");
            overlayElement.style = {display: "none"};
            overlayElement.style.width = "0px"
            overlayElement.style.height = "0px"
            overlayElement.style.left = (mousePosition.x - titleElement.offsetLeft)  +"px"
            overlayElement.style.top = (mousePosition.y - titleElement.offsetTop)  +"px"
            overlayElement.style.display = "block"



            setTimeout(() => {
                overlayElement.style.width = "900px"
                overlayElement.style.height = "900px"
                setTimeout(() => {
                    overlayElement.style.opacity = 0;
                    setTimeout(() => {
                        overlayElement.style = {display: "none"};
                    }, 500)
                }, 300)
            }, 100)
        }
        return (
            <div className="sb_section">
                <div className="sb_sect_titl_tile" id={sectionid+"_title"} onClick={() => {click()}}>
                    <div className="overlay" style={{display: "none"}} id={sectionid+"_overlay"}/>
                    <p><Text id={title} /><span data="span-1"> {span}</span></p>
                    <div className="spacer" />
                    <img alt="" loading="lazy" src="https://xploit.men/scdn/?fluenticons&name=chevron_down"/>
                </div>
                <div className="sb_sect_tileContainer">
                    {children}
                </div>
            </div>
        )
    }

    const alluserprojects = JSON.parse(decode(localStorage.getItem("DATA__PROJECTS")));
    console.log(alluserprojects);
    

    // Pinned Limit (*/6) message
        var span = 0
        alluserprojects.forEach(element => {
            if(element.pinned) {
                span += 1;
            }
        })


    // Pined projects
    var pinnedprojects = ( <Section title="sb.section.pinned.title" span={span+"/6"} id="pinned" >
    {
        alluserprojects.map(element => {
            if(element.pinned) {
                return (
                    <SectionElement id={element.id} children={element.name} icon="pin" />
                )
            } return ( <></> );
        })
    }
</Section>)
    span === 0 ? pinnedprojects = (<></>) : void(0);
    // Return
    return (
    <>
    <div className="SBContent">
        <Title />
        {pinnedprojects}
        <Section title="sb.section.teams.title" id="teams">
            <SectionElement id="none" icon="people_team" >
                <Text id="general.unknown" />
            </SectionElement>
        </Section>
        <EngineVersion />
    </div>

    <div className="account">
        <div data-tooltip-id="profile" className="account-icon"><img src="https://xploit.men/scdn/?fluenticons&amp;name=person" loading="lazy" alt="" /></div>

        <div className="account-separator"/>
        <div data-tooltip-id="search" className="account-icon"><img src="https://xploit.men/scdn/?fluenticons&amp;name=search" loading="lazy" alt="" /></div>

        <div className="account-separator"/>
        <div data-tooltip-id="notifications" className="account-icon"><img src="https://xploit.men/scdn/?fluenticons&amp;name=alert" loading="lazy" alt="" /></div>
    </div>
      <ReactTooltip
        id="profile"
        place="top"
        style={{ opacity: 1, borderRadius: "10px", backgroundColor: "var(--sb-account-hover)" }}
        content="Account"
      />
      <ReactTooltip
        id="search"
        place="top"
        style={{ opacity: 1, borderRadius: "10px", backgroundColor: "var(--sb-account-hover)" }}
        content="Search"
      />
      <ReactTooltip
        id="notifications"
        place="top"
        style={{ opacity: 1, borderRadius: "10px", backgroundColor: "var(--sb-account-hover)" }}
        content="Notifications"
      />
    </>
    )
}
