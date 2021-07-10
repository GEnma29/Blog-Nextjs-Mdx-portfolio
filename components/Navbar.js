import { useState } from "react";
import {
  Flex,
  Spacer,
  Stack,
  Box,
  Text,
  Center,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon, MenuIcon, HamburgerIcon } from "@chakra-ui/icons";
import Darkmode from "./Darkmode";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const bgcolor = useColorModeValue("gray.200", "gray.700");
  const [display, changeDisplay] = useState("none");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Flex>
      <Flex align="center" pos="fixed" top="1rem" right=".5rem" zIndex="toast">
        {/* Desktop */}
        <Flex>
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link href="/">
              <Button variant="ghost" mr={2}>
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" mr={2}>
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" mr={2}>
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" mr={2}>
                Contact
              </Button>
            </Link>
          </Flex>
        </Flex>
        {/* mobile */}
        <IconButton
          aria-label="Open Menu"
          size="md"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Flex
          w="100%"
          bgColor={bgcolor}
          display={display}
          zIndex="tooltip"
          minH="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end" p={2}>
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open menu"
              size="md"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Link href="/">
              <Button variant="ghost" m={4}>
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" m={4}>
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" m={4}>
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" m={4}>
                Contact
              </Button>
            </Link>
          </Flex>
          <Spacer />
          <Flex align="flex-end" w="100%">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={120}
              height={120}
              priority
            />
            <Flex
              justify="space-around"
              bg="black"
              w="calc(100% - 120px);"
              h="120"
              zIndex="10"
            >
              <Flex align="center" justify="center"></Flex>
            </Flex>
          </Flex>
        </Flex>
        <Darkmode />
      </Flex>
    </Flex>
  );
};

export default Navbar;
