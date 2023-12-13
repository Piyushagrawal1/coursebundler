import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState('')
    const [passsword, setPasssword] = useState('')

    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={16}>
                <Heading children='Welcome to CourseBundler' />
                <form style={{ width: '100%' }}>
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
                        <FormLabel htmlFor='password' children="Password" />
                        <Input
                            required
                            id='password'
                            value={passsword}
                            onChange={e => setPasssword(e.target.value)}
                            type='password'
                            placeholder='Your Password...'
                            focusBorderColor="yellow.500" />
                    </Box>
                    {/* For forget password */}
                    <Box>
                        <Link to='/forgetpassword'>
                            <Button fontStyle={'sm'} variant={'link'} >
                                Forgot password!
                            </Button>
                        </Link>
                    </Box>

                    <Button my={4} colorScheme='yellow' type='submit'>
                        Login
                    </Button>

                    {/* For new user */}
                    <Box>
                        <Link to="/register">
                            <Button fontSize={'sm'} variant={'link'}>
                                New User? Register here...
                            </Button>
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Login