import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Rubik';
        font-style: medium;
        font-weight: 500;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: regular;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@500&display=swap');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
)
const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em",
})
const overrides = {
  fonts: {
    heading: "Rubik",
    body: "Roboto",
  },
    breakpoints,
    config,
    styles: {
        global: {
    
          // styles for the `body`
          body: {
              margin: "0",
              padding: "0",
          },
          // styles for the `a`
          a: {
            color: "teal",
            _hover: {
              textDecoration: "underline",
            },
          },
          zIndices: {
            hide: -1,
            auto: "auto",
            base: 0,
            docked: 10,
            dropdown: 1000,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800,
          },
        },
      },
}
const theme = extendTheme(overrides)
export default theme