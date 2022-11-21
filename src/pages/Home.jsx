import React from 'react'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <Flex justify='center' alignItems='center' w='100vw' h='100vh' direction='column'>
        <Text fontSize={72} fontWeight={700}>
            Chocolate City
        </Text>
        {/* <Link to='/artist'> */}
            <Button variant='solid' size='xl'>
                View Artists
            </Button>
        {/* </Link> */}
    </Flex>
  )
}
