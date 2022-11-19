import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Table from './common/ArtistTable'
import http from '../services/httpService';
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
        <Box w='100%' borderRadius={10}><Table header={tableColumns} data={artists} /></Box>
    )
}
