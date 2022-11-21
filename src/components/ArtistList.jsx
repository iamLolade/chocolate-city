import React, { useEffect, useState } from 'react'
import { Box, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Navbar from './common/Navbar';
import Header from './common/Header';
import Table from './common/Table'
import axios from 'axios';

const tableColumns = [
	{
		key: 'name',
		title: 'Name',
	},
	{
		key: 'username',
		title: 'Username',
	},
	{
		key: 'email',
		title: 'Email',
	},
	{
		key: 'city',
		title: 'City',
	}
];


export default function ArtistList() {
    const [artists, setArtists] = useState([])
	const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setArtists(res?.data)
        })
    }, [])

	const handleNavigation = (str) => navigate(str)

    return (
        <Flex w='100vw' direction='column'>
			<Navbar />
			<Center>
				<Flex direction='column' alignItems='space-between' justify='center'>
					<Header mt={50} title='All Chocolate City Artist Artists'/>
					<Box borderRadius={10} mt={50}>
						<Table header={tableColumns} data={artists} handleNavigation={handleNavigation}/>
					</Box>
				</Flex>
			</Center>
        </Flex>
    )
}
