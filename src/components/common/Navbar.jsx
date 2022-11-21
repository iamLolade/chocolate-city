import { Center, Heading } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <nav>
        <Center bg='#eee' p={2}>
            <Heading as='h1' size='2xl' color='black'>Record Label Archive</Heading>
        </Center>
    </nav>
  )
}
