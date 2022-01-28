import { Flex, Heading } from '@chakra-ui/react'

export const Headline = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #ccff00, #ff0000)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)

Headline.defaultProps = {
  title: 'KanKan, the KanBan for Coders',
}
