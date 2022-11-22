import React from 'react'
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import Spinner from './Spinner'

export default function List({ data = [] }) {
    
    return (
        <UnorderedList>
            {data.length === 0 && <Spinner mt={2} size='xl' />}
            {data?.map(item => (
                <ListItem key={item.id} textTransform='capitalize' m={8}>{item.title}</ListItem>
            ))}
        </UnorderedList>
    )
}
