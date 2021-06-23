import ContentSection from "./ContentSection"
import Sidebar from "./Navbar/Sidebar"

const Layout = ({children}) => {
    return (
    <>
        <Sidebar/>
        <ContentSection>
            {children}
        </ContentSection>
    </>
    )
}

export default Layout;