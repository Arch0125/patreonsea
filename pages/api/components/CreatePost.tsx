import { Box, Button, IconButton, Input } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react';
import {AiOutlineFileImage} from 'react-icons/ai'

const CreatePost =() =>{

    const toast = useToast()

    const showToast =() =>{
        toast({
            title: 'Post created.',
            description: "Refresh your page to see latest post",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
    }

    const[textcontent,setTextcontent]=useState('');

    return(
        <Box flexDirection={"column"} alignContent={"flex-end"} textAlign={"end"}>
            <Textarea onChange={e => setTextcontent(e.target.value)} placeholder= '#wagmi tell what youre buidling'/>
            <Button mr={"20px"}  marginTop={"20px"} variant={"solid"} colorScheme={"purple"}><AiOutlineFileImage/> &nbsp; Add Image</Button>
            <Button onClick={() => showToast()} marginTop={"20px"} variant={"solid"} colorScheme={"purple"}>Create Post</Button>
        </Box>
    )
}

export default CreatePost