import { SBContent } from './sidebarc/SBContent'

export function SideBar() {
    return (
        <>
        <div class="sidebar">
            
          <SBContent />  

        </div>
        <img loading="lazy" src="https://airacloud-v5.vercel.app/aira.sidebar.svg" className="colors-img" alt=""/>
        </>
    )
}