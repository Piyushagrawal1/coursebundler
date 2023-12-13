import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {

    const [oldPasssword, setOldPasssword] = useState('')
    const [newPasssword, setNewPasssword] = useState('')

    return (
        <Container py={16} minH={'90vh'}>
            <form>
                <Heading
                    children='Change Password'
                    textTransform={'uppercase'}
                    my={16}
                    textAlign={['center', 'left']}
                />
                <VStack spacing={8}>
                    {/* for old password */}
                    <Input
                        required
                        id='password'
                        value={oldPasssword}
                        onChange={e => setOldPasssword(e.target.value)}
                        type='password'
                        placeholder='Old Password'
                        focusBorderColor="yellow.500" /> 
                        {/* For new password */}
                    <Input
                        required
                        id='password'
                        value={newPasssword}
                        onChange={e => setNewPasssword(e.target.value)}
                        type='password'
                        placeholder='New Password'
                        focusBorderColor="yellow.500" /> 

                        <Button w={'full'} colorScheme='yellow' type='submit'>Change Password</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword