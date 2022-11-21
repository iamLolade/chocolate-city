import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { HiDotsVertical } from 'react-icons/hi'

export default function TweetTile({ data = [] }) {
  return (
    <Box>
        {data.map(tweet => (
            <Flex justify='space-between' p={14} borderBottom='1px solid #eee' cursor='pointer' _hover={{ background: '#FDFAFA'}}>
                <Box w='80%'>
                    <Text fontSize={10} fontWeight={600} color='#000080' textTransform='capitalize'>Name: {tweet.name}</Text>
                    <Text fontSize={15} color='#000'>{`${tweet.body.slice(0, 70)}...`}</Text>
                    <Text fontSize={7} color='#333'>{tweet.email}</Text>
                </Box>
                <Icon as={HiDotsVertical} />
            </Flex>
        ))}
    </Box>
  )
}