import {
  Text,
  Code,
} from '@chakra-ui/react'
import { Container } from '../components/Container'
import { Headline } from '../components/Headline'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Headline title='KanKan, the KanBan for Coders'/>
    <DarkModeSwitch />
    <Footer>
      <Text>
        Built using <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>TypeScript</Code>.
      </Text>
    </Footer>
    
    <CTA />
  </Container>
)

export default Index
