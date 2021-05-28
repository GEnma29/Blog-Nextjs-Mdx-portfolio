import { IconButton , useColorMode} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
const Darkmode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return (
        <IconButton
          aria-label="Toggle dark mode"
          mr={2}
          size="md" 
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          color={iconColor[colorMode]}

          />
    )
}

export default Darkmode
