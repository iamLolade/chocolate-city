import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './common/Header'
import Navbar from './common/Navbar'
import TweetTile from './TweetTile'
import List from './common/List'
import { Box, Stack, Flex, Image, Tooltip, useDisclosure } from '@chakra-ui/react'
import AddTweet from './common/AddTweet'
import twitter from '../public/icons/twitter.png'
import album from '../public/icons/album.png'

export default function ArtistDetails() {

  const [albums, setAlbums] = useState([])
  const [tweets, setTweets] = useState([])
  const {id} = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()

  console.log('Albums: ', albums.filter((album) => album.userId === Number(id)))
  console.log('Tweets: ', tweets)

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
          setAlbums(res?.data?.filter((album) => album.userId === parseInt(id)))
      })
  }, [id])

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
          setTweets(res?.data?.filter(tweet => tweet.postId === parseInt(id)))
      })
  }, [id])

  const handleDelete = () => {
    axios.delete('https://jsonplaceholder.typicode.com/comments/id')
  }

  return (
    <Box>
      <AddTweet isOpen={isOpen} onClose={onClose} />
      <Navbar />
      <Stack direction={['column', 'row']} spacing={8} d='flex' justifyContent='space-around' mt={80}>
        <Box w='full' boxShadow='0px 0px 8px 4px rgba(19, 74, 112, 0.1)' borderRadius='10px' p={16} bg='#fff'>
          <Flex alignItems='center'>
            <Image src={album} w={32} h={32} ml={30} />
            <Header title='Albums' ml={10} fontFamily='Pacifico' />
          </Flex>
          <Box mt={30} ml={20} w='80%'>
            <List data={albums} />
          </Box>
        </Box>
        <Box w='full' boxShadow='0px 0px 8px 4px rgba(19, 74, 112, 0.1)' borderRadius='10px' p={10} bg='#fff'>
          <Flex justify='space-between' alignItems='center'>
            <Box>
              <Header title='Tweets' ml={10} fontFamily='Pacifico' />
            </Box>
            <Tooltip label='ADD TWEET' fontSize={12} fontWeight={500} bg='#03A9F4' color='#fff' p={2} borderRadius={3}>
              <Image src={twitter} w={32} h={32} mr={10} cursor='pointer' onClick={onOpen} />
            </Tooltip>
          </Flex>
          <TweetTile data={tweets} handleDelete={handleDelete} />
        </Box>
      </Stack>
    </Box>
  )
}
