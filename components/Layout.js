import { Flex,Spacer,Stack,Box,Text,Center, IconButton, Button, useColorModeValue } from "@chakra-ui/react"


export default function Layout({ children }) {
  return (
    <>
      <Flex
        
          align="center"
          justify ="center"
          p={4}

      >
        <Flex 
          align="center"
          justify ="center"
          display={['none', 'none','flex','flex']}
          maxW ="md"
          p={2}
          flexDir="column"
        >
           {children}
        </Flex>
        <Flex 
          maxW="lg"
          flexDir="column"
          display={['flex', 'flex','none','none']}
        >
          {children}
        </Flex>
      </Flex>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }

        html {
          font: 100%/1.5 system-ui;
        }

        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }

        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }

        h1,
        p {
          margin-bottom: 1.5rem;
        }

        code {
          font-family: 'Menlo';
        }
      `}</style>
    </>
  )
}
