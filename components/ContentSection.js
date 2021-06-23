import { Flex } from "@chakra-ui/layout";

const ContentSection = ({children}) => {
    return (
    <Flex
            // pos="sticky"
            left="5"
            float="left"
            h="95vh"
            marginTop="2.5vh"
            ml="2vw"
            w="calc(100% - 300px)"
            flexDir="column"
            justifyContent='space-between'
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
            borderRadius={10}
    >
        {children}
    </Flex>
    )
}

export default ContentSection;