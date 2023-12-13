import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { fileUploadCss } from '../../Auth/Register';

const CreateCourse = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const categories = [
        'Web development',
        'Artificial Intellegence',
        'Data Structure & Algorithm',
        'App Development',
        'Data Science',
        'Game Development',
    ];

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
        <Grid css={{ cursor: `url(${cursor}), default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Container py={16}>

                <form>
                    <Heading
                        children='Create Course'
                        textTransform={'uppercase'}
                        my={16}
                        textAlign={['center', 'left']}
                    />

                    <VStack m={'auto'} spacing={8}>
                        <Input
                            id='password'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type='text'
                            placeholder='Title'
                            focusBorderColor="purple.300"
                        />
                        <Input
                            id='password'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            type='text'
                            placeholder='description'
                            focusBorderColor="purple.300"
                        />
                        {/* this is also a interview qus.----  jo ki categories me se koi bhi chiz choose kro to vo upar input field me bhi update ho jani chahiye apne aap 
                        Ans.--- input field or select tag ki value or onchange method ko same rakhna hai or select tag me upar jo categories ka jo array banaya hai uske sath map karva dena hai 
                                  AND ALL SET */}
                        <Input
                            id='password'
                            value={createdBy}
                            onChange={e => setCreatedBy(e.target.value)}
                            type='text'
                            placeholder='Craete a Name'
                            focusBorderColor="purple.300"
                        />

                        <Select
                            value={createdBy}
                            onChange={e => setCreatedBy(e.target.value)}
                            focusBorderColor="purple.300"
                        >
                            <option value="">Categories </option>
                            {
                                categories.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </Select>

                        <Input
                            required
                            accept='image/*'
                            type='file'
                            focusBorderColor="purple.300"
                            css={{
                                '&::file-selector-button':{
                                    ...fileUploadCss,
                                    color:'purple'
                                }
                            }}
                            onChange={changeImageHandler}
                        />

                            {
                                imagePrev && (
                                    <Image src={imagePrev} boxSize={64} objectFit={'contain'} />
                                ) 
                            }

                            <Button w={'full'} colorScheme='purple' type='submit' > Create</Button>

                    </VStack>

                </form>

            </Container>
            <Sidebar />
        </Grid>
    )
}

export default CreateCourse