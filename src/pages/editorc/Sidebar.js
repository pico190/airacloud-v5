import { SideBarSeparator } from '../homec/sidebarc/separator'


export function SideBar({ title, children }) {
    return (
        <>
        <div class="sidebar">
            <div className="SBContent">
                <div class="aira_sb_title">
                    <div className="aira_logo_small">
                            <img src={'https://'+window.location.host+'/icon.svg'} loading="lazy" alt=""/>
                            <div className="aira_logo_title">
                                <span>AiraCloud</span>
                            </div>
                    </div>
                    <h1>{title}</h1>
                </div>
                {children}
            </div>
        </div>
        <img loading="lazy" src={'https://'+window.location.host+'/aira.sidebar.svg'} className="colors-img" alt=""/>
        <SideBarSeparator />
        </>
    )
}