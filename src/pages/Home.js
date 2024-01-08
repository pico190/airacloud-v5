import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'
import { getUserProjects } from '../utils/api/getuserprojects'

export function Home({ sidinfo }) {
    const fetchData = async () => {
      getUserProjects(sidinfo.token);
    };fetchData();

    return (
      <>
          <SideBar sidinfo={sidinfo} />
          <Content sidinfo={sidinfo} />
      </>
    )
}