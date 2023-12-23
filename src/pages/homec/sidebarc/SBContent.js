import {useMousePosition} from '../../../utils/useMousePosition'

export function SBContent() {

    function Title() {
        return (
            <div className="aira_logo">
                <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt=""/>
                <div className="aira_logo_title">
                    <h1 style={{ height: "30px" }}>AiraCloud</h1>
                    <span>BETA</span>
                </div>
            </div>
        )
    }
    function SectionElement({children, icon}) { return ( <div className="sb_sect_tile_contained"><img alt="" loading="lazy" src={`https://xploit.men/scdn/?fluenticons&name=${icon}`}/><p>{children}</p></div>)}
    function Section({children, title, span=""}) {
        const sectionid = title.toLowerCase().replace(" ", "_");
        const mousePosition = useMousePosition();
        function click() {
            var overlayElement = document.getElementById(sectionid+"_overlay");
            var titleElement = document.getElementById(sectionid+"_title");
            overlayElement.style.width = "0px"
            overlayElement.style.height = "0px"
            overlayElement.style.display = "block"

            overlayElement.style.left = (mousePosition.x - titleElement.offsetLeft)  +"px"
            overlayElement.style.top = (mousePosition.y - titleElement.offsetTop)  +"px"

            setTimeout(() => {
                overlayElement.style.width = "900px"
                overlayElement.style.height = "900px"
                setTimeout(() => {
                    overlayElement.style.opacity = 0;
                    setTimeout(() => {
                        overlayElement.style.display = "none";
                        overlayElement.style.opacity = 1;
                    }, 500)
                }, 600)
            }, 500)
        }
        return (
            <div className="sb_section">
                <div className="sb_sect_titl_tile" id={sectionid+"_title"} onClick={() => {click()}}>
                    <div className="overlay" style={{display: "none"}} id={sectionid+"_overlay"}/>
                    <p>{title}<span> {span}</span></p>
                    <div className="spacer" />
                    <img alt="" loading="lazy" src="https://xploit.men/scdn/?fluenticons&name=chevron_down"/>
                </div>
                <div className="sb_sect_tileContainer">
                    {children}
                </div>
            </div>
        )
    }
    return (
    <>
    <div className="SBContent">
        <Title />
        <Section title="Pinned projects" span="3/6" >
            <SectionElement children="Swoftolofto" icon="pin" />
            <SectionElement children="AiraCloud en Astro" icon="pin" />
            <SectionElement children="Tumbar a Stuxiom" icon="pin" />
        </Section>
        <div className="sb_separator"></div>
        <div className="aira_info">
                <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt="" style={{height: "fit-content"}}/>
                <span>
                    <font style={{fontSize: "26px", opacity: "0.75"}}><b>AiraCloud</b> Release 1.0</font>
                    <br /><font style={{fontSize: "16px", opacity: "0.25"}}>Engine v5.1.69</font>
                    <br /><font style={{fontSize: "16px", opacity: "0.25"}}>Last update 32 minues ago. <u>See changelog</u>.</font>
                    <br /><font style={{fontSize: "16px", opacity: "0.5"}}>(c) 2023 Aira / Made with <img alt="" loading="lazy" src="https://xploit.men/scdn/heart.svg" width="15px" height="15px" style={{transform: "translateY(15%)"}} /> by Swiftly</font>
                </span>
        </div>
    </div>
    </>
    )
}
