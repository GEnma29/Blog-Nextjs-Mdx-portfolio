import Typed from "typed.js";
import { useState, useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
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
  toggleColorMode ,
  useColorModeValue,
  Icon,
  Image,
  WrapItem,
} from "@chakra-ui/react";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Link } from "@chakra-ui/react";
import NextImage from 'next/image'
const about = () => {
//// const for color ///////////////////////////////////////////////////
  const title = useColorModeValue("#ff9400", "#ffa500")
/////////////////////////////////////////////////////////////////////////
  const [Elemte1, setElemte1] = useState("hidden");
  const [Element2, setElement2] = useState("hidden");
  const [ControlFig1, setControlFig1] = useState("hidden")
  // create Scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const Scrolled = window.scrollY;
      if (Scrolled=== 0) {
        setControlFig1("visible");
      } else if (Scrolled < 450) {
        setElemte1("hidden");
        setControlFig1("visible");
      } else if (Scrolled >= 625) {
        setElemte1("visible");
      }
      if (Scrolled < 1250) {
        setElement2("hidden");
      } else if (Scrolled >= 1260) {
        setElement2("visible");
      }
      console.log(Scrolled);
    });
  }, []);

  // Create Ref element.
  const el = useRef("Web Developer");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Bulding interactive interface",
        "Designer, ...somethigs",
        "Creative",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Flex align="center" justify="center" flexDir="column">
    <Flex display={['none','none','flex','flex']} zIndex="base" position="absolute" top= "-150px" left= '-50px' >
          <motion.div
          initial="hidden"
          animate={ControlFig1}
          transition={{ duration: 0.2 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          >
            <NextImage  src="/iPhone.png" alt="me" width="3400" height="2250" priority />
          </motion.div>
        </Flex>
      <Flex  zIndex="docked" w="100%" h="100vh" justifyContent="center" align="center">
        <Flex
          align="center"
          flexDir="column"
          marginTop={['4','4','8','8']}
          justify="center"
          bg="tel"
          p={2}
          h={["100%", "100%", "50%", "50%"]}
        >
          <Heading casing="justify" size="3xl" color={title}>
            Hello,
          </Heading>
          <Heading m={2} align="center" casing="justify" size="2xl" color={title}>
            I'm Enmanuel Alfonzo
          </Heading>
          <Flex m={2}>
            <Link
              href="https://www.linkedin.com/in/enmanuel-alfonzo-angulo-612b18188/"
              color={title}
              isExternal
            >
              <Icon
                as={FaLinkedin}
                w={["8", "8", "12", "12"]}
                h={["8", "8", "12", "12"]}
                p={1}
              />
            </Link>
            <Link href="https://github.com/GEnma29" color={title} isExternal>
              <Icon
                as={FaGithub}
                w={["8", "8", "12", "12"]}
                h={["8", "8", "12", "12"]}
                p={1}
              />
            </Link>
          </Flex>
          <Box align="center" maxW="lg" borderRadius="lg" m={2}>
            <Text fontSize="xl" fontWeight="700" color={title}>
              I'm <span ref={el}></span>
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        id="background"
        w="100%"
        h="100vh"
        justifyContent="center"
        align="center"
        flexDirection="row"
        wrap="wrap"
      >
        <motion.div
          id="background"
          initial="hidden"
          animate={Elemte1}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Box
            p={2}
            maxW={["sm", "sm", "md", "md"]}
            justifyContent="center"
            align="center"
            flexDir="column"
            borderWidth="1px"
            borderRadius="lg"
          >
            <Heading color="teal" p={4}>
              About me{" "}
            </Heading>
            <Text textAlign="justify" p={2}>
              I'm a creative Frontend-developer (somethings backend developer ),
              passionate about modern and clean interfaces. I love programming,
              Listing music, traveling, and cooking.{" "}
            </Text>
          </Box>
        </motion.div>
      </Flex>
      <Flex w="100%" h="100vh" justifyContent="center" align="center">
        <motion.div
          initial="hidden"
          animate={Element2}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Text>Stack</Text>
        </motion.div>
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
