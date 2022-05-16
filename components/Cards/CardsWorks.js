import { Box , Flex, Image, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const CardsWorks = ({
    urlImg,
    CompanyName,
    Position,
    LinkPage,
}) => {
  return (
    <Flex
    margin={'1rem'}
    align={'center'}
    justify={'center'}
    >
        <Image 
        borderRadius={'1rem'}
        p={2}
        boxSize='100px'
        src={urlImg} 
        />
        <Box
        minW={138}
        >
            <Text
            fontSize={'1.25rem'}
            lineHeight={'1.75rem'}
            fontWeight={800}
            >
                {CompanyName}
            </Text>
            <Text

            >
                {Position}
            </Text>
            <Link colorScheme={'teal.300'} href={LinkPage} isExternal>
            <Box
            color={'teal'}
            alignItems={'center'}
            >
            {CompanyName} <ExternalLinkIcon   mx='2px' />
            </Box>
            </Link>

        </Box>
    </Flex>
  )
}

export default CardsWorks