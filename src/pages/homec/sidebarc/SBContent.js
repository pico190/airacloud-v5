export function SBContent() {
    return (
    <>
    <div className="SBContent">
        <div className="aira_logo">
            <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt=""/>
            <div className="aira_logo_title">
                <h1 style={{ height: "30px" }}>AiraCloud</h1>
                <span>BETA</span>
            </div>
        </div>
        <div className="sb_section">
            <div className="sb_sect_titl_tile">
                <p><b>Pinned projects</b> <span>3/6</span></p>
                <div className="spacer" />
                <img alt="" loading="lazy" src="https://xploit.men/scdn/?fluenticons&name=chevron_down"/>
            </div>
            <div className="sb_sect_tileContainer">
                <div className="sb_sect_tile_contained">
                    <img alt="" loading="lazy" src="https://xploit.men/scdn/?fluenticons&name=pin"/>
                    <p>Swoftolofto</p>
                </div>
                <div className="sb_sect_tile_contained">
                    <img alt="" loading="lazy" src="https://xploit.men/scdn/?fluenticons&name=pin"/>
                    <p>AiraCloud en Astro</p>
                </div>
                <div className="sb_sect_tile_contained">
                    <img alt="" loading="lazy" src="https://xploit.men/scdn/?fluenticons&name=pin"/>
                    <p>Tumbar web a Stuxiom</p>
                </div>
            </div>
        </div>
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
