import { SBContent } from './sidebarc/SBContent'
import { SideBarSeparator } from './sidebarc/separator'
import "./sidebar.css";

export function SideBar() {
    return (
        <>
        <div class="sidebar">
            
          <SBContent />  
        </div>
        <img loading="lazy" src="https://airacloud-v5.vercel.app/aira.sidebar.svg" className="colors-img" alt=""/>
        <SideBarSeparator />
        </>
    )
}