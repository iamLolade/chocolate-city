import {
    Box,
    Center,
    Text,
	Stack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Textarea,
	Button,
} from '@chakra-ui/react';

const AddTweet = ({ isOpen, onClose }) => {
    
    return (
        <Center>
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody p={4} bg='#fff' mt={100} boxShadow='10px 10px 20px rgba(54, 171, 190, 0.05)' borderRadius='10px 10px 0px 0px'>
                        <form>
                            <Center d='flex' flexDirection='column' w='full'>
                                <Stack spacing={25}>
                                    <Text fontSize={20} fontWeight={700} color='brand.primary' textTransform='uppercase' align='center'>Add Tweet</Text>
                                    <Box>
                                        <Textarea
                                            type='text'
                                            size='lg'
                                            borderColor='#134A70'
                                            mt={2}
                                            p={8}
                                            placeholder='Type something here...'
                                            minW={500}
                                            minH={200}
                                        />
                                    </Box>
                                </Stack>
                                <Button mt={20} p={8} fontSize={18} border='none' fontWeight={600} color='#fff' bg='#03A9F4' borderRadius={6}>Tweet</Button>
                                <Text m={20} fontSize={14} fontWeight={600} cursor='pointer' color='#134A70' as='u' onClick={onClose}>Close</Text>
                            </Center>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Center>
    );
}
 
export default AddTweet;