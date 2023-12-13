import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [password, setPasssword] = useState('')

    const params = useParams()
    
    return (
        <Container h={'85vh'} py={16}>
            <form>
                <Heading
                    children="Reset Password"
                    my={16}
                    textTransform={'uppercase'}
                    textAlign={['center', 'left']}
                />
                <VStack spacing={8}>
                    <Input
                        required
                        value={password}
                        onChange={e => setPasssword(e.target.value)}
                        type='password'
                        placeholder='New Password'
                        focusBorderColor="yellow.500" />

                    <Button
                        type='submit'
                        w={'full'}
                        colorScheme='yellow'
                    >
                        Reset Password
                    </Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ResetPassword