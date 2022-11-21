import React from 'react'
import {
    Box,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

export default function List({ data = [] }) {
    
    return (
        <UnorderedList>
            {data?.map(item => (
                <ListItem key={item.id} textTransform='capitalize' m={8}>{item.title}</ListItem>
            ))}
        </UnorderedList>
    )
}
