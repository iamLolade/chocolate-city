import { Center, Heading, Image } from '@chakra-ui/react'
import city from '../../public/icons/villa.png'

export default function Navbar() {
  return (
    <nav>
        <Center bg='rgb(255,203,124,.05)' p={4}>
            <Heading as='h1' size='3xl' color='black' fontSize={52}>Chocolate City</Heading>
            <Image src={city} w={50} h={50} ml={30}/>
        </Center>
    </nav>
  )
}
