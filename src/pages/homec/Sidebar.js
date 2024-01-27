import { SBContent } from './sidebarc/SBContent'
import { SideBarSeparator } from './sidebarc/separator'


export function SideBar({ sidinfo }) {
    return (
        <>
        <div class="sidebar">
            
          <SBContent sidinfo={sidinfo} />  
        </div>
        <img loading="lazy" src={'https://'+window.location.host+'/aira.sidebar.svg'} className="colors-img" alt=""/>
        <SideBarSeparator />
        </>
    )
}