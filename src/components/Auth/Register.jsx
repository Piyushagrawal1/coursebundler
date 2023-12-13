import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
};

const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
};

const Register = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [passsword, setPasssword] = useState('')
    const [imagePrev, setImagePrev] = useState('')
    const [image, setImage] = useState('');

    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    return (
        <Container h={'100vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={8} >
                <Heading children='Registration' textTransform={'uppercase'} />
                <form style={{ width: '100%' }}>
                    {/* for avatar image*/}
                    <Box my="2" display={'flex'} justifyContent='center'>
                        <Avatar size={'2xl'} src={imagePrev} />
                    </Box>
                    {/* for name */}
                    <Box my={4}>
                        <FormLabel htmlFor='name' children="Name" />
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type='text'
                            placeholder='Enter Your Name...'
                            focusBorderColor="yellow.500" />
                    </Box>
                    {/* for email */}
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
                    {/* for password */}
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
                    {/* For choose Avatar */}
                    <Box my={4}>
                        <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
                        <Input
                            required
                            accept='image/*'
                            id='chooseAvatar'
                            // value={passsword}
                            // onChange={e => setPasssword(e.target.value)}
                            type='file'
                            focusBorderColor="yellow.500"
                            css={fileUploadStyle}
                            onChange={changeImageHandler}
                            />
                    </Box>
                    

                    <Button my={4} colorScheme='yellow' type='submit'>
                        Sign Up
                    </Button>

                    {/* For new user */}
                    <Box mb={4}>
                        <Link to="/login">
                            <Button fontSize={'sm'} variant={'link'} colorScheme='yellow'>
                                Already Signed up Login here
                            </Button>
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Register