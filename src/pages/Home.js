import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'

export function Home({ sidinfo }) {
    return (
        <>
            <SideBar sidinfo={sidinfo} />
            <Content sidinfo={sidinfo} />
        </>
    )
}