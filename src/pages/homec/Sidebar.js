import { SBContent } from './sidebarc/SBContent'
import { SideBarSeparator } from './sidebarc/separator'


export function SideBar({ sidinfo, projects }) {
    return (
        <>
        <div class="sidebar">
            
          <SBContent sidinfo={sidinfo} projects={projects} />  
        </div>
        <img loading="lazy" src="https://airacloud-v5.vercel.app/aira.sidebar.svg" className="colors-img" alt=""/>
        <SideBarSeparator />
        </>
    )
}