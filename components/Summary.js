import React, {useState} from 'react'
import { Box, Text , Button } from '@chakra-ui/react'
import ButtonTerminal from './Buttons/ButtonTerminal'
import Stackcomponent from './TerminalComponents/Stackcomponent'

const Summary = () => {

  const [state, setState] = useState(false)
  return (
    <Box 
    width={'100%'}
    height={'100%'}
    mt={'1rem'}
    display={'flex'}
    flexWrap={'wrap'}
    >
        <Box 
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        w={['100%', '100%','50%', '50%']}
        borderRadius='8px'
        p={1}
        bg={'#E2E8F0'}
        >
          <Box
           display={'flex'}
           w={'100%'}
           alignItems={'center'}
           justifyContent={'flex-start'}
          >
            <ButtonTerminal onClick={()=>setState(!state)} active={!state}  label={'Summary'}/>
            <ButtonTerminal onClick={()=>setState(!state)} active={state}  label={'Stack'} />
          </Box>
          <Box
          display={'flex'}
          justifyContent={'flex-start'}
          bg={'#0C0C0C'}
          w={'100%'}
          >
            {
              state ? (
                <Box
                p={2}
                >
                  <Text
                  color={'whiteAlpha.800'}
                  >
                    <Stackcomponent />
                  </Text>
                </Box>
              ):(
                <Box
                p={2}
                >
                  <Text
                  color={'whiteAlpha.800'}
                  >
                    Summary
                  </Text>
                </Box>
              )
            }
          </Box>
        </Box>
        <Box
         display={['none', 'none', 'flex', 'flex']}
         w={['100%', '100%','50%', '50%']}
        >
  

        </Box>
    </Box>
  )
}

export default Summary