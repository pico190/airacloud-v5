export function SBContent() {
    return (<div className="SBContent">
        <div className="aira_logo">
            <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt=""/>
            <div className="aira_logo_title">
                <h1>AiraCloud</h1>
                <span>BETA</span>
            </div>
        </div>
        <div className="sb_section">
            <div className="sb_sect_titl_tile">
                <p><b>Pinned projects</b> <span>3/6</span></p>
                <div className="spacer">
                <p>icon here</p>
            </div>
            <div className="sb_sect_tileContainer">
                <div className="sb_sect_tile_contained">
                    <p>icon here</p>
                    <p>Swofolofto</p>
                </div>
                <div className="sb_sect_tile_contained">
                    <p>icon here</p>
                    <p>AiraCloud en Astro</p>
                </div>
                <div className="sb_sect_tile_contained">
                    <p>icon here</p>
                    <p>Tumbar a Stoximo</p>
                </div>
            </div>
        </div>
        <div className="sb_separator"></div>
        <div className="aira_info">
                <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt=""/>
                <span>
                    <font style={{fontSize: "26px", opacity: "0.75"}}><b>AiraCloud</b> Release 1.0</font>
                    <br /><font style={{fontSize: "16px", opacity: "0.25"}}>Engine v5.1.69</font>
                    <br /><font style={{fontSize: "16px", opacity: "0.25"}}>Last update 32 minues ago. <u>See changelog</u>.</font>
                    <br /><font style={{fontSize: "16px", opacity: "0.5"}}>(c) 2023 Aira / Made with 💚 by Swiftly</font>
                </span>
        </div>
    </div>)
}
