import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import theme from "../styles/theme";
import Container from "../components/Container";
function MyApp({ Component, pageProps, router  }) {
  return (
    <ChakraProvider theme={theme}>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Container>
          <Component {...pageProps} />
        </Container>
      </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
