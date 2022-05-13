import { Box } from '@chakra-ui/react'
import React from 'react'
import { SiTypescript  } from "@react-icons/all-files/si/SiTypescript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";

import NextjsIcon from '../CustomIcons/NextjsIcon';

const Stackcomponent = () => {
    return (
        <Box
        >
            <Box
                alignItems={'center'}
                justifyContent={'flex-start'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                >
                    <Box mr={'.5rem'}>-</Box> <FaReact /> <Box ml={'.5rem'}>React.js</Box>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                >
                    <Box mr={'.5rem'}>-</Box> <FaReact /> <Box ml={'.5rem'}>React Native</Box>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                >
                    <Box mr={'.5rem'}>-</Box> <SiTypescript /> <Box ml={'.5rem'}>Typescript</Box>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                >
                    <Box mr={'.5rem'}>-</Box> <NextjsIcon  /> <Box ml={'.5rem'}>Nextjs</Box>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                >
                    <Box mr={'.5rem'}>-</Box> <FaNodeJs  /> <Box ml={'.5rem'}>Node.js</Box>
                </Box>
            </Box>


        </Box>
    )
}

export default Stackcomponent