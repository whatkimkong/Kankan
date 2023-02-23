import { Link as ChakraLink, Button, Box } from "@chakra-ui/react";
import { Container } from "./Container";
import ButtonMain from "./ButtonMain";


export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <ChakraLink
      href="/"
      flexGrow={1}
      mx={2}
    ><ButtonMain title='Home'/>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="/login"
      flexGrow={2}
      mx={2}
    >
    <ButtonMain title='Login'/>
    </ChakraLink>

    <ChakraLink
      href="/signup"
      flexGrow={1}
      mx={2}
    >
      <ButtonMain title='Sign Up'/>
    </ChakraLink>
    <ChakraLink
      isExternal
      href="https://github.com/whatkimkong/Kankan"
      flexGrow={3}
      mx={2}
    >
      <ButtonMain title='View Repo'/>
    </ChakraLink>
  </Container>
);
