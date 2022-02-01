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
      isExternal
      href="https://www.linkedin.com/in/kim-lyons-hernandez/"
      flexGrow={1}
      mx={2}
    ><ButtonMain title='Projects'/>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://www.linkedin.com/in/kim-lyons-hernandez/"
      flexGrow={2}
      mx={2}
    >
    <ButtonMain title='Login'/>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/whatkimkong/Kankan"
      flexGrow={1}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        Sign Up
      </Button>
    </ChakraLink>
    <ChakraLink
      isExternal
      href="https://github.com/whatkimkong/Kankan"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        View This Repo
      </Button>
    </ChakraLink>
  </Container>
);
