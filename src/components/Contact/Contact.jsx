import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <Container h={['92vh', '86.6vh']} >
            <VStack h={'full'} justifyContent={'center'} spacing={14}>
                <Heading children="Contact Us" />
                <form style={{ width: '100%' }}>

                    <Box my={4}>
                        <FormLabel htmlFor='name' children=" Name" />
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type='text'
                            placeholder='Enter your Name'
                            focusBorderColor="yellow.500" />
                    </Box>

                    <Box my={4}>
                        <FormLabel htmlFor='email' children="Email Address" />
                        <Input
                            required
                            id='enail'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type='email'
                            placeholder='Your email address...'
                            focusBorderColor="yellow.500" />
                    </Box>

                    <Box my={4}>
                        <FormLabel htmlFor='message' children="Message" />
                        <Textarea
                            required
                            id='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder='Type your message'
                            focusBorderColor="yellow.500" />
                    </Box>

                    <Button my={4} colorScheme='yellow' type='submit'>
                        Send Mail
                    </Button>

                    <Box my="4">
                        Request for a course?{' '}
                        <Link to="/request">
                            <Button colorScheme={'yellow'} variant="link">
                                Click
                            </Button>{' '}
                            here
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Contact