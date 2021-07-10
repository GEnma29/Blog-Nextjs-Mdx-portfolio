
import {Flex,Heading } from "@chakra-ui/react"

import ContactForm from '../components/ContactForm'

const contact = () => {
    return (
        <Flex 
        w="100%"
        marginTop="1rem"
        flexDirection="column"
        justifyContent="center"
        zIndex="base"
        > 
            <Heading alignSelf="center">Contact</Heading>
            <Flex
            align="center"
            justify="center"
            p={4}
             mt={8}
             zIndex="base" 
            >
                <ContactForm />
            </Flex>
        </Flex>
       
    )
}

export default contact
