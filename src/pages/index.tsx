import {
  Text,
  Code,
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    
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
