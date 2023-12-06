export function SBContent() {
    return (<div className="SBContent">
        <div className="aira_logo">
            <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt=""/>
            <div className="aira_logo_title">
                <h1>AiraCloud</h1>
                <span>BETA</span>
            </div>
        </div>
        <div className="sb_separator"></div>
        <div className="aira_info">
            <div className="aira_info_title">
                <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt=""/>
                <h1 style={{fontWeight: "normal"}}><b>AiraCloud</b> Release 1.0</h1>
            </div>
            <font>Engine v5.1.69</font>
            <font>Last update 32 minues ago. <u>See changelog</u>.</font>
            <font>(c) 2023 Aira / Made with 💚 by Swiftly</font>
        </div>
    </div>)
}