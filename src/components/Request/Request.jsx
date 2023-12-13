import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('')

    return (
        <Container h={['92vh', '86.6vh']} >
            <VStack h={'full'} justifyContent={'center'} spacing={14}>
                <Heading children="Request A New Course" />
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
                        <FormLabel htmlFor='message' children="Course" />
                        <Textarea
                            required
                            id='course'
                            value={course}
                            onChange={e => setCourse(e.target.value)}
                            placeholder='Explain The Course'
                            focusBorderColor="yellow.500" />
                    </Box>

                    <Button my={4} colorScheme='yellow' type='submit'>
                        Send Mail
                    </Button>

                    <Box my="4">
                        See available Courses!{' '}
                        <Link to="/courses">
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

export default Request