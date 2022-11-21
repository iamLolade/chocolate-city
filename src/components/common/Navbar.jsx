import { Center, Heading } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <nav>
        <Center bg='#eee' p={4}>
            <Heading as='h1' size='3xl' color='black' fontSize={52}>Chocolate City</Heading>
        </Center>
    </nav>
  )
}
