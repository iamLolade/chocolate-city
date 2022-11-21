import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar';
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

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setArtists(res?.data)
        })
    }, [])

    return (
        <Box w='100%'>
			<Navbar />
            <Header title='All Chocolate City Artist Artists'/>
            <Box borderRadius={10} mt={4}>
                <Table header={tableColumns} data={artists} />
            </Box>
        </Box>
    )
}
