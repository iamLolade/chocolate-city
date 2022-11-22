import React from 'react'
import {
	Menu as CMenu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
    Tooltip
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { HiDotsVertical } from 'react-icons/hi'
import { RiEditFill, RiDeleteBin5Line } from 'react-icons/ri'

export default function Menu() {
  return (
    <CMenu>
        <MenuButton bg='transparent' border='none' cursor='pointer'>
            <Icon as={HiDotsVertical} w={30} h={20} />
        </MenuButton>
        <MenuList boxShadow="0px 20px 40px rgba(93, 26, 178, 0.15)" p={4} w={100} d='flex' flexDirection='column' mt={-30} mr={10}>
            <Tooltip label='Edit' fontSize={12} fontWeight={500} bg='#03A9F4' color='#fff' p={2} borderRadius={3}>
                <MenuItem border='none' justifyContent='end' p={8} m={4} bg='#fff' cursor='pointer'>
                    <Icon as={RiEditFill} w={30} h={20}/>
                </MenuItem>
            </Tooltip>
            <MenuDivider border='.5px solid #eee' />
            <Tooltip label='Delete' fontSize={12} fontWeight={500} bg='#03A9F4' color='#fff' p={2} borderRadius={3}>
                <MenuItem border='none' justifyContent='end' p={8} m={4} bg='#fff' cursor='pointer'>
                    <Icon as={RiDeleteBin5Line} w={30} h={20}/>
                </MenuItem>
            </Tooltip>
        </MenuList>
    </CMenu>
  )
}
