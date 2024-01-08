import { Content } from './homec/Content'
import { SideBar } from './homec/Sidebar'
import { getUserProjects } from '../utils/api/getuserprojects'

export function Home({ sidinfo }) {
    const fetchData = async () => {
      const projects = getUserProjects(sidinfo.token);
      
      return (
        <>
            <SideBar sidinfo={sidinfo} projects={projects} />
            <Content sidinfo={sidinfo} projects={projects} />
        </>
      )
    };

    fetchData();
}