import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { BsTerminalFill } from "@react-icons/all-files/bs/BsTerminalFill";


const ButtonTerminal = ({active,label, onClick}) => {

  return (
    <Box
    as='button'
    onClick={onClick}
    display={'flex'}
    alignItems={'center'}
    width={'100%'}
    justifyContent={'center'}
    borderRadius='8px'
    bg={ active ? '#E2E8F0':'#CBD5E0'} 
    p={2}
    >
     <BsTerminalFill  color='#0C0C0C' />
     <Text ml={'.5rem'}>{label}</Text>
    </Box>
  )
}

export default ButtonTerminal