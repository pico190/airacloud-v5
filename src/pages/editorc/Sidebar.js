import { SideBarSeparator } from '../homec/sidebarc/separator'


export function SideBar({ title, children }) {
    return (
        <>
        <div class="sidebar">
            <div className="SBContent">
                <div class="aira_sb_title">
                    <div className="aira_logo_small">
                            <img src={'https://'+window.location.host+'/icon.svg'} loading="lazy" alt=""/> {/*https://airacloud-v5-d1.vercel.app/icon.svg'*/}
                            <div className="aira_logo_title">
                                <span>AiraCloud</span>
                            </div>
                    </div>
                    <h1>{title}</h1>
                </div>
                {children}
            </div>
        </div>
        <SideBarSeparator />
        </>
    )
}