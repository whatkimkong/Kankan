import {
    Text,
    Code,
} from '@chakra-ui/react'
import { Headline } from '../../components/Headline'
import { Container } from '../../components/Container'
import { DarkModeSwitch } from '../../components/DarkModeSwitch'
import { CTA } from '../../components/CTA'
import { Footer } from '../../components/Footer'

const Login = () => (
<Container height="100vh">
    <Headline title="Login" />
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

export default Login;