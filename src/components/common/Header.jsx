import { Heading, Highlight } from "@chakra-ui/react";

import React from 'react'

export default function Header({ title, ...props }) {
  return (
    <Heading as='h2' size='2xl' {...props}>
        <Highlight 
            query='Chocolate City'
            styles={{ px: '6', py: '1', borderRadius: '6px', bg: '#03A9F4', color: '#fff' }}
        >
            {title}
        </Highlight>
    </Heading>
  )
}
