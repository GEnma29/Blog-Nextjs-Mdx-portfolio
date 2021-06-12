import {
  Avatar,
  Grid,
  Flex,
  Badge,
  Box,
  Text,
  Heading,
  IconButton,
  Button,
  useColorModeValue,
  Image,
  WrapItem,
} from "@chakra-ui/react";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Link } from "@chakra-ui/react";
const about = () => {
  return (
    <Flex align="center" justify="center">
      <Flex
        align="center"
        justify="center"
        bg="tel"
        h={["100%", "100%", "50%", "50%"]}
      >
        <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          Mi nombre es Enmanuel Alfonzo, soy un desarrollador web enfocado en
          JavaScript. Me encantaría que conozcan un poco más de mí, de mis
          experiencias en el área, de mis trabajos y de los conocimientos que
          hasta ahora he podido obtener. 
        </Box>
      </Flex>
    </Flex>
    /** 
        <Flex 
          align="center"
          justify="center"
      
        >

            <Flex
            w="100%"
            align="center"
            justify="center"
            flexDir="column"
            display={['flex','flex','none','none']}
            >
            <Flex 
              w="100%"
              align="center"
              justify="center"
            >
                <WrapItem
                p={2}
                >
                    <Image 
                        borderRadius="full"
                        src="/Enmafoto.jpg"
                        alt="Picture of the author"
                        width={140}
                        height={140}
                        
                    />

                </WrapItem>
                <Flex
                p={2}
                justify="center"
                flexDir="column"
                >
                    <Text>Hey, mi nombre es Enmanuel</Text>
                    <Text>Web developer </Text>
                    <Flex  m={2} alignItems="space-between" justify="center">
                        <Link  href= "https://github.com/GEnma29" colorScheme="teal" isExternal >
                            <FaGithub style={{fontSize:"23px", marginRight:"1rem"}} />
                        </Link>
                        <Link  href= "https://www.linkedin.com/in/enmanuel-alfonzo-angulo-612b18188/" colorScheme="teal" isExternal >
                            <FaLinkedin style={{fontSize:"23px"}} />
                        </Link>
                    </Flex>
                </Flex>
                </Flex>
                <Flex p={4} align="center" justify="center" flexDir="column">
                    <Heading size="lg">Skills</Heading>
                    <Box d='flex'  alignItems="baseline">
                        <Badge borderRadius="full" m={2} px="2" colorScheme="teal" >
                           <Flex align="center" justify="center"  flexDir="row"><SiReact style={{fontSize:"23px"}} /><Text m={2}>React.js</Text></Flex>
                        </Badge>
                        <Badge borderRadius="full" m={2} px="2" colorScheme="teal" >
                        <Flex align="center" justify="center"  flexDir="row"><SiNextDotJs style={{fontSize:"23px"}}/><Text m={2}>Next.js</Text></Flex>
                        </Badge>
                        <Badge borderRadius="full" m={2} px="2" colorScheme="teal">
                        <Flex align="center" justify="center"  flexDir="row"><SiNodeDotJs style={{fontSize:"23px"}} /> <Text m={2}>Node.js</Text></Flex>
                        </Badge>
                    </Box>
                </Flex>
                <Flex alignItems="center" flexDir= "column" mt={4}>
                    <Heading as="h3" size="lg">Projects</Heading>
                    <Image 
                        src="/undraw_building_websites_i78t.svg"
                        alt="building websites"
                        mt={4}
                        width={200}
                        height={200}
                    />
                </Flex>

            </Flex>
            <Flex
              display={['none','none','flex','flex']}
            ></Flex>

        </Flex>
        */
  );
};

export default about;
