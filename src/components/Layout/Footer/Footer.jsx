import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { VscGithubInverted } from 'react-icons/vsc';
const Footer = () => {
    return (
        <Box padding={'3'} bg="blackAlpha.900" minH={'10vh'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={['center', 'flex-start']} width="full">
                    <Heading children="All Rights Reserved" color={'white'} />
                    <Heading
                        fontFamily={'body'}
                        size="sm"
                        children="Piyush Agrawal"
                        color={'yellow.400'}
                    />
                </VStack>

                <HStack
                    spacing={['2', '10']}
                    justifyContent="center"
                    color={'white'}
                    fontSize="30"
                >
                    <a href="https://www.linkedin.com/in/piyush-agrawal-07ba62208/" target={'blank'}>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://www.instagram.com/piyushagarwal7775/" target={'blank'}>
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://github.com/Piyushagrawal1" target={'blank'}>
                        <VscGithubInverted />
                    </a>
                </HStack>
            </Stack>
        </Box>
    );
};

export default Footer;


