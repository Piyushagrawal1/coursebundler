import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

  return (
      <Container py={16} minH={'90vh'}>
          <form>
              <Heading
                  children='Update Profile'
                  textTransform={'uppercase'}
                  my={16}
                  textAlign={['center', 'left']}
              />
              <VStack spacing={8}>
                  {/* for old password */}
                  <Input
                      id='password'
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type='text'
                      placeholder='Name'
                      focusBorderColor="yellow.500" />
                  {/* For new password */}
                  <Input
                      required
                      id='password'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type='email'
                      placeholder='Email'
                      focusBorderColor="yellow.500" />

                  <Button w={'full'} colorScheme='yellow' type='submit'>Update</Button>
              </VStack>
          </form>
      </Container>
  )
}

export default UpdateProfile