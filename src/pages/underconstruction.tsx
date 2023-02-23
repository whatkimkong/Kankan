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
      <Headline title='Undergoing Maintenance' />
      <Text><Code>Status</Code> : <Code>under construction.</Code></Text>
      <Text>Thanks for your patience</Text>
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
  