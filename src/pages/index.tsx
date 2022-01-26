import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { ArrowForwardIcon, PlusSquareIcon, QuestionOutlineIcon} from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
       <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={PlusSquareIcon} color="green.600" />
          <ChakraLink
            isExternal
            href="https://www.linkedin.com/in/kim-lyons-hernandez/"
            flexGrow={1}
            mr={2}
          >
            Go to your Kanban <ArrowForwardIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={PlusSquareIcon} color="green.600" />
          <ChakraLink isExternal href="https://github.com/whatkimkong" flexGrow={1} mr={2}>
            Find out more <QuestionOutlineIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Your ❤️ KanKan</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
