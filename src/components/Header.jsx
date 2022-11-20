import { Center, Heading, Highlight, Text } from "@chakra-ui/react";

import React from 'react'

export default function Header({ title }) {
  return (
    <Heading as='h3'>
        <Highlight 
            query='Chocolate City'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue', color: '#fff' }}
        >
            {title}
        </Highlight>
    </Heading>
  )
}
