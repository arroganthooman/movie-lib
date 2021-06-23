import { Flex, Divider, IconButton } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { FaHome, FaSearch, FaRegBookmark } from "react-icons/fa";

const Sidebar = () => {
    return (
        <>
        <Flex
            pos="sticky"
            left="5"
            float="left"
            h="95vh"
            marginTop="2.5vh"
            w="200px"
            flexDir="column"
            justifyContent='space-between'
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
            borderRadius={10}
            backgroundColor="#1B262C"
        >
            <Flex
                flexDir="column"
                alignItems="flex-start"
                as="nav"
            >
                <NavItem title="Home" link="/" icon={FaHome} active/>
                <NavItem title="Search" link="/search" icon={FaSearch}/>
                <NavItem title="Bookmarked" link="/bookmark" icon={FaRegBookmark}/>
                <NavItem title="Liked" link="/like" icon={FaHome}/>

            </Flex>
        </Flex>
        </>

    )
}

export default Sidebar;