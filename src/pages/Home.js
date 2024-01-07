import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'
import { getUserProjects } from '../utils/api/getuserprojects'

export function Home({ sidinfo }) {
    return (
        <>
            <SideBar sidinfo={sidinfo} projects={getUserProjects(sidinfo.token)} />
            <Content sidinfo={sidinfo} projects={getUserProjects(sidinfo.token)} />
        </>
    )
}