import React from 'react'
import { Flex, Box, Image} from '@chakra-ui/react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    
    return (

        <Flex w="100%" h="9vh" border='2px' backgroundColor='#FFBB00' color="white" p="1%" >
            <Flex w="62%" justifyContent="space-around">
                <Box>
                    <Image src={logo} w="99%" h="6vh" />
                </Box>
                <Link to="/"><Box padding="1">Home</Box></Link>
                <Link to="/about"><Box p="1">About</Box></Link>
                <Link to="/destinations"><Box p="1">Destination</Box></Link>
                <Link to="/blogs"><Box p="1">Blogs</Box></Link>
                <Link to="/contact"><Box p="1">Contact</Box></Link>
                {/* <Box padding="1" >Destination</Box>
                <Box padding="1" >Blogs</Box>
                <Box padding="1" >Contact</Box> */}

            </Flex>
            <Flex w="38%" justifyContent="flex-end" >
                <Box padding="1" >Welcome User!</Box>
                <Link to="/login"><Box padding="1" >Sign In</Box> </Link>
                <Box padding="1" >Sign Up</Box>

            </Flex>
        </Flex>

    )
}
