import { Table, Avatar, Box, Center, Flex, Tbody, Td, Text, Th, Thead, Tr, Icon } from '@chakra-ui/react';
import Spinner from '../Spinner';

export default function ArtistTable({ header=[], data = [] }) {
  return (
    <Center mt={6} overflowY='auto' borderRadius='10px 10px 10px 10px' h={["100%"]} w='100%'>
        <Table whiteSpace='nowrap'>
            <Thead>
                <Tr
                    bg='rgba(19, 74, 112, 0.05)'
                    borderRadius='10px 10px 0px 0px'
                    boxShadow='0px 0px 8px 4px rgba(19, 74, 112, 0.1)'
                    borderBottom='1px solid #9FA7AD'
                >
                    {header?.map(column => (
                        <Th key={column.key} color='#000' fontSize={{base: 12, '2xl': 16}}>{column.title}</Th>
                    ))}
                    <Th>{" "}</Th>
                </Tr>
            </Thead>

            <Tbody borderRadius='10px' h={["100%"]} overflowY='auto' p={2}>
                    {data.length === 0 && <Spinner mt={2}/>}

                    {data.map((artist) => (
                        <Tr
                            key={artist.id}
                            boxShadow='10px 10px 20px rgba(54, 171, 190, 0.05)'
                            borderRadius='10px'
                            bg='white.300'
                            p={12}
                            m={2}
                            cursor='pointer'
                            _hover={{ transform: 'scale(1.03)', color: '#062F36'}}
                        >
                            <Td p={6}>
                                <Text fontSize={{ base: 10, xl: 12, '2xl': 14 }} fontWeight={500} textTransform='capitalize'>{artist?.name}</Text>
                            </Td>
                            <Td p={6}>
                                <Text fontSize={{ base: 10, xl: 12, '2xl': 14 }} fontWeight={500} textTransform='capitalize'>{artist?.username}</Text>
                            </Td>
                            <Td p={6}>
                                <Text fontSize={{ base: 10, xl: 12, '2xl': 14 }} fontWeight={500} textTransform='capitalize'>{artist?.email}</Text>
                            </Td>
                            <Td p={6}>
                                <Text fontSize={{ base: 10, xl: 12, '2xl': 14 }} fontWeight={500} textTransform='capitalize'>{artist?.address?.city}</Text>
                            </Td>
                        </Tr>
                    ))}
            </Tbody>
        </Table>
    </Center>
  )
}
