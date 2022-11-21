import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './common/Header'
import List from './common/List'
import { Box, Stack, Flex } from '@chakra-ui/react'

export default function ArtistDetails() {

  const [albums, setAlbums] = useState([])
  const [tweets, setTweets] = useState([])
  const {id} = useParams()

  console.log('Albums: ', albums.filter((album) => album.userId === Number(id)))
  console.log('Tweets: ', tweets)

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
          setAlbums(res?.data.filter((album) => album.userId === parseInt(id)))
      })
  }, [])

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
          setTweets(res?.data)
      })
  }, [])

  return (
    <Box>
      <Flex direction={['column', 'row']} justify='space-evenly'>
        <Box w='full' boxShadow='0px 0px 8px 4px rgba(19, 74, 112, 0.1)' borderRadius='10px' p={16}>
          <Header title='Albums'/>
          <Box mt={8}>
            <List data={albums}/>
          </Box>
        </Box>
        <Box w='full' boxShadow='0px 0px 8px 4px rgba(19, 74, 112, 0.1)' borderRadius='10px' p={8}>
          <Header title='Tweets'/>
        </Box>
      </Flex>
    </Box>
  )
}
