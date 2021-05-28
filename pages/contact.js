
import {Flex} from "@chakra-ui/react"

import ContactForm from '../components/ContactForm'

const contact = () => {
    return (
        <Flex 
        w="100%"
        alignSelf='center'
        justifyContent="center"
        zIndex="base"
        >
            <Flex
             zIndex="base" 
            >
                <ContactForm />
            </Flex>
        </Flex>
       
    )
}

export default contact
