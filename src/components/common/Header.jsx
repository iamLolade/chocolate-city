import { Heading, Highlight } from "@chakra-ui/react";

import React from 'react'

export default function Header({ title }) {
  return (
    <Heading as='h3'>
        <Highlight 
            query='Chocolate City'
            styles={{ px: '3', py: '1', borderRadius: '3em', bg: 'blue', color: '#fff' }}
        >
            {title}
        </Highlight>
    </Heading>
  )
}
