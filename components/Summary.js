import React, {useState} from 'react'
import { Box, Text , Button } from '@chakra-ui/react'
import ButtonTerminal from './Buttons/ButtonTerminal'
import Stackcomponent from './TerminalComponents/Stackcomponent'

const Summary = () => {

  const [state, setState] = useState('Stack')
  return (
    <Box 
    width={['100%','100%', '600px', '600px']}
    p={2}
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
        w={'100%'}
        borderRadius='8px'
        p={1}
        minH={136}
        bg={'#E2E8F0'}
        >
          <Box
           display={'flex'}
           w={'100%'}
           alignItems={'center'}
           justifyContent={'flex-start'}
          >
            <ButtonTerminal onClick={()=>setState('Summary')} active={ state === 'Summary'}  label={'Summary'}/>
            <ButtonTerminal onClick={()=>setState('Stack')} active={state === 'Stack'}  label={'Stack'} />
          </Box>
          <Box
          display={'flex'}
          justifyContent={'flex-start'}
          bg={'#0C0C0C'}
          w={'100%'}
          >
            {
              state === "Stack" ? (
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
                minH={136}
                >
                  <Box
                  width={'100%'}
                  p={2}
                  >
                  <Text
                  color={'whiteAlpha.800'}
                  >
                   Building quality websites and applications with React js,
                   work with frameworks like Next.js always focus to write clean
                    code and Build scalable solutions 

                  </Text>
                  </Box>
                </Box>
              )
            }
          </Box>
        </Box>
    </Box>
  )
}

export default Summary