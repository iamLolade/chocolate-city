import { Center, Heading } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <nav>
        <Center bg='#eee' p={6}>
            <Heading as='h1' size='2xl' color='brown'>Chocolate City</Heading>
        </Center>
    </nav>
  )
}
