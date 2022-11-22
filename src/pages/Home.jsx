import React from 'react'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import videoBg from '../public/video/videoBg.mp4'


export default function Home() {
  return (
    <Flex justify='center' alignItems='center' w='100vw' h='100vh' direction='column'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content'>
            <Text fontSize={100} fontWeight={700}>
                Chocolate City
            </Text>
            <Link to='/artist' decoration='none'>
                <Button
                    as='b'
                    variant='solid'
                    fontSize={18}
                    fontWeight={900}
                    cursor='pointer'
                    color='#03A9F4'
                    bg='#fff'
                    textDecoration='none'
                    textTransform='uppercase'
                    border='none'
                    borderRadius={3}
                    p={8}
                >
                    View Artists
                </Button>
            </Link>
        </div>
    </Flex>
  )
}
