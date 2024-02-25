import { SBContent } from './sidebarc/SBContent'
import { SideBarSeparator } from './sidebarc/separator'


export function SideBar({ sidinfo }) {
    return (
        <>
        <div class="sidebar">
            
          <SBContent sidinfo={sidinfo} />  
        </div>
        <SideBarSeparator />
        </>
    )
}