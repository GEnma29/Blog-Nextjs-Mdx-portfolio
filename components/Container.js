import { Flex } from "@chakra-ui/react"
import Navbar from './Navbar'
import Footer from './Footer'
const Container = ({children}) => {
    return (
        <Flex
         
          alignItems='center'
          justify="center"
          flexDir="column"
        >
            <Flex
            w="100%"
            >
                <Navbar />
            </Flex>
            <Flex
            w="100%"
            minH="90vh"
            justify="center"
            >
                {children}
            </Flex>
            <Flex 
            w="100%"
            >
                <Footer />
            </Flex>
        </Flex>
    )
}

export default Container
