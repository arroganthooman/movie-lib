import Icon from "@chakra-ui/icon";
import { Flex, Link as ChakraLink, Text } from "@chakra-ui/layout"
import { Menu, MenuButton } from "@chakra-ui/menu"
import NextLink from 'next/link';
import style from '../../styles/Navbar.module.css'
import { useRouter } from 'next/router';


const NavItem = ({title, link, icon}) => {
    const router = useRouter()
    const active = router.pathname === link;

    return (
        <Flex
            flexDir="column"
            mt={30}
            w="100%"
            alignItems="flex-start"
        >
            <Menu placement="right">
                <NextLink href={link} passHref>
                    <ChakraLink
                        backgroundColor={!active ? "#1B262C" : "#fff"}
                        borderRadius={15}
                        w="90%"
                        p={3}
                        _hover={{textDecor:'none', backgroundColor:"#fff"}}
                        ml={2}
                        className={style.buttonlink}
                    >
                        <MenuButton w="100%">
                            <Flex alignItems="center">
                                <Icon as={icon} fontSize="xl" color="#82AAAD" />
                                <Text color={!active ? "#fff" : "#000"} className={style.navfont} display="flex" ml={5}>{title}</Text>
                            </Flex>
                        </MenuButton>
                    </ChakraLink>
                </NextLink>
            </Menu>
        </Flex>
    )
}

export default NavItem;