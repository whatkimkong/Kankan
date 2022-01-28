import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <ChakraLink isExternal href="https://www.linkedin.com/in/kim-lyons-hernandez/" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        My LinkedIn
      </Button>
    </ChakraLink>
    <ChakraLink isExternal href="https://www.linkedin.com/in/kim-lyons-hernandez/" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        Login
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
)
