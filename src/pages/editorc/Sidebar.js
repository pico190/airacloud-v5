import { SideBarSeparator } from './sidebarc/separator'


export function SideBar({ title, children }) {
    return (
        <>
        <div class="sidebar">
            <div className="SBContent">
                <div className="aira_logo">
                        <img width="54px" src="https://airacloud-v5.vercel.app/icon.svg" loading="lazy" alt=""/>
                        <div className="aira_logo_title">
                            <h1 style={{ height: "30px" }}>AiraCloud</h1>
                            <span>BETA</span>
                        </div>
                </div>
                {children}
            </div>
        </div>
        <img loading="lazy" src="https://airacloud-v5.vercel.app/aira.sidebar.svg" className="colors-img" alt=""/>
        <SideBarSeparator />
        </>
    )
}