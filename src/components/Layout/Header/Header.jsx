import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
    <Link onClick={onClose} to={url}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
);
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isAuuthenticated = true;
    const user = {
        role: 'user'
    }
    const logoutHandler = () => {
        console.log("Logout");
        onClose();
    }

    return (
        <>
            <ColorModeSwitcher />

            <Button onClick={onOpen}
                colorScheme='yellow'
                width={12}
                height={12}
                zIndex={'overlay'}
                rounded={'full'}
                position={'fixed'
                } top={6}
                left={6} >
                <RiMenu3Line />
            </Button>

            <Drawer placement='left' isOpen={isOpen} onClose={onClose} >
                <DrawerOverlay backdropFilter={'blur(5px)'} />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>Course Bundler</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} alignItems={'flex-start'}>
                            <LinkButton onClose={onClose} url='/' title="Home" />
                            <LinkButton onClose={onClose} url='/courses' title="Browse All Courses" />
                            <LinkButton onClose={onClose} url='/request' title="Request A Course" />
                            <LinkButton onClose={onClose} url='/contact' title="Contact Us" />
                            <LinkButton onClose={onClose} url='/about' title="About" />
                        </VStack>
                        <HStack
                            justifyContent={'space-evenly'}
                            position="absolute"
                            bottom={'2rem'}
                            width="80%" >
                            {
                                isAuuthenticated ? (
                                    <>
                                        <VStack>
                                            <HStack>
                                                <Link onClick={onClose} to='/profile'>
                                                    <Button variant={'ghost'} colorScheme='yellow'>
                                                        Profile
                                                    </Button>
                                                </Link>
                                                <Button variant={'ghost'} onClick={logoutHandler}>
                                                    <RiLogoutBoxLine />
                                                    Logout
                                                </Button>
                                            </HStack>
                                            {
                                                user && user.role === 'admin' && (
                                                    <Link onClick={onClose} to='/admin/dashboard'>
                                                        <Button colorScheme='purple' variant={'ghost'}>
                                                            <RiDashboardFill style={{ margin: '4px' }} />
                                                            Dashboard
                                                        </Button>
                                                    </Link>
                                                )
                                            }
                                        </VStack>
                                    </>
                                ) : (
                                    <>
                                        <Link onClick={onClose} to='/login'>
                                            <Button colorScheme='yellow'>Login</Button>
                                        </Link>
                                        <p>OR</p>
                                        <Link onClick={onClose} to='/register'>
                                            <Button colorScheme='yellow'>Sign Up</Button>
                                        </Link>
                                    </>)
                            }
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header