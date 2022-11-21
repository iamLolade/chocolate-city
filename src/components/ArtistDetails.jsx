import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './common/Header'
import Navbar from './common/Navbar'
import TweetTile from './TweetTile'
import List from './common/List'
import { Box, Button, Stack, Flex } from '@chakra-ui/react'

export default function ArtistDetails() {

  const [albums, setAlbums] = useState([])
  const [tweets, setTweets] = useState([])
  const {id} = useParams()

  console.log('Albums: ', albums.filter((album) => album.userId === Number(id)))
  console.log('Tweets: ', tweets)

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
          setAlbums(res?.data?.filter((album) => album.userId === parseInt(id)))
      })
  }, [])

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
          setTweets(res?.data?.filter(tweet => tweet.postId === parseInt(id)))
      })
  }, [])

  return (
    <Box>
      <Navbar />
      <Stack direction={['column', 'row']} spacing={8} d='flex' justifyContent='space-evenly' mt={80}>
        <Box w='full' boxShadow='0px 0px 8px 4px rgba(19, 74, 112, 0.1)' borderRadius='10px' p={16}>
          <Header title='Albums'/>
          <Box mt={30}>
            <List data={albums} />
          </Box>
        </Box>
        <Box w='full' boxShadow='0px 0px 8px 4px rgba(19, 74, 112, 0.1)' borderRadius='10px' p={8}>
          <Flex justify='space-between'>
            <Box>
              <Header title='Tweets'/>
            </Box>
            <Button bg='#000080' border='none' color='#fff' p={4} borderRadius={6}>
              Add tweet
            </Button>
          </Flex>
          <TweetTile data={tweets} />
        </Box>
      </Stack>
    </Box>
  )
}
