import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCss } from '../Auth/Register'

const Profile = () => {

    const user = {
        name: 'Piyush',
        email: 'piyush@gmail.com',
        CreatedAt: String(new Date().toISOString()),
        role: 'user',
        subscription: {
            status: 'active'
        },
        playlsit: [
            {
                course: "sduksf",
                poster: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600",
            }
        ]
    }

    const removeFromPlaylistHandler = id => {
        console.log(id);
    }

    const changeImageSubmitHandler = (e, image)=>{
        e.preventDefault()
        console.log(image);
    }

    const {isOpen, onClose, onOpen} = useDisclosure()

    return (
        <Container minH={'95vh'} maxW={'container.lg'} py={3}>
            <Heading children='Profile' textTransform={'uppercase'} m={8} />
            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding="8"
            >
                <VStack>
                    <Avatar boxSize={48} />
                    <Button onClick={onOpen} colorScheme='yellow' variant={'ghost'}>
                        Change Photo
                    </Button>
                </VStack>
                <VStack spacing={4} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text children='Name' fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children='Email' fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children='CreatedAt' fontWeight={'bold'} />
                        <Text children={user.CreatedAt.split('T')[0]} />
                    </HStack>
                    {
                        user.role !== "admin" && <HStack>
                            <Text children='subscription' fontWeight={'bold'} />
                            {user.subscription.status === 'active' ? (
                                <Button color='yellow.500' variant={'unstyled'}>Cancel Subscription</Button>
                            ) : (
                                <Link to={'/subscribe'}>
                                    <Button colorScheme='yellow'>Subscribe</Button>
                                </Link>
                            )}
                        </HStack>
                    }
                    <Stack direction={['column', 'row']} alignItems={'center'} >
                        <Link to={'/updateprofile'}>
                            <Button >Update Profile</Button>
                        </Link>
                        <Link to={'/changepassword'}>
                            <Button >Change Password</Button>
                        </Link>
                    </Stack>
                </VStack>
            </Stack>

            <Heading children='Playlist' my={8} size={'md'} />

            {
                user.playlsit.length > 0 && (
                    <Stack direction={['column', 'row']} alignItems={'center'} flexWrap={'wrap'} p={4} >
                        {
                            user.playlsit.map((element, index) => (
                                <VStack w={48} m={2} key={element.course}>
                                    <Image src={element.poster} boxSize={'full'} objectFit={'contain'} />
                                    <HStack>
                                        <Link to={`/course/${element.course}`} >
                                            <Button colorScheme='yellow' variant={'ghost'}>
                                                watch Now
                                            </Button>
                                            <Button onClick={() => removeFromPlaylistHandler(element.course)}>
                                                <RiDeleteBin6Fill />
                                            </Button>
                                        </Link>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }

            <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />

        </Container>
    )
}

export default Profile

function ChangePhotoBox({
    isOpen,
    onClose,
    changeImageSubmitHandler,
    loading,
}) {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const changeImage = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const closeHandler = () => {
        onClose();
        setImagePrev('');
        setImage('');
    };
    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={e => changeImageSubmitHandler(e, image)}>
                            <VStack spacing={'8'}>
                                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}

                                <Input
                                    type={'file'}
                                    css={{ '&::file-selector-button': fileUploadCss }}
                                    onChange={changeImage}
                                />

                                <Button
                                    isLoading={loading}
                                    w="full"
                                    colorScheme={'yellow'}
                                    type="submit"
                                >
                                    Change
                                </Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>

                <ModalFooter>
                    <Button mr="3" onClick={closeHandler}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}