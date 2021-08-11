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
import Figure from "../components/Figure";
import Terminalanimate from '../components/Terminalanimate'
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

 /* useEffect(() => {
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
  }, []);*/
  return (
    <Flex
    align="center"
    justify="center"
    >
      {/** mobile */}
      <Flex
      display={['flex','flex','none','none']}
      align="center"
      justify="center"
      flexDirection="column"

      >
        <section id="Hi" 
        >
          <Flex
         
          flexDirection="column"
          >
            <Flex
            flexDirection="column"
            >
              <Flex>
                <Terminalanimate />
              </Flex>
              <Heading>Hi,</Heading>
              <Heading>I'm Enmanuel,</Heading>
              <Heading>web developer</Heading>
            </Flex>
            <Text mt={2}>FrontEnd and Backend Developer</Text>
            <Button>Contact to me</Button>
          </Flex>

        </section>
        <section id="me">
          <Flex
          align="center"
          justify="center"
          >
            <Text>section 2</Text>
          </Flex>

        </section>
        <section id="skills">
          <Flex
          align="center"
          justify="center"
          >
            <Text>section 3</Text>
          </Flex>

        </section>
      </Flex>
      <style jsx>{`
        section {
          display: flex;
          min-height: 100vh;
          width: 100%;
          align-items: center;
          justify-contet: center;


      `}</style>
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
