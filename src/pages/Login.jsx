import React, {useState} from 'react';
import {
    Box, Button, Card, CardBody, Center, Alert, AlertIcon, AlertTitle, Flex, FormControl, FormLabel, Heading, HStack, Input, Stack, VStack, CircularProgress
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import footM from "../assets/footM.jpg"


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await userLogin({ email, password });
            setSuccess('Logged in successfully!');
            setIsLoading(false);
            setIsLoggedIn(true);
            navigate("/")
        } catch (error) {
            setError('Invalid username or password!');
            setIsLoading(false);
            setEmail('');
            setPassword('');

        }
    };

    const userLogin = async ({ email, password }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin123@c.com' && password === 'admin123') {
                    resolve();
                }
                else {
                    reject();
                }
            }, 1000);
        });
    };

    return (
        <Box h="120vh" backgroundImage={footM} backgroundSize='cover'>
            <Flex justify="center" align="center" h="90vh" >
                <Center w="100%">
                    <Stack spacing='4'>
                        <VStack spacing='6'>
                            <Heading
                                fontWeight='500'
                                fontSize='30px'
                                letterSpacing='-0.5px'
                                color="white"
                            >
                                Login
                            </Heading>
                        </VStack>

                        <Card bg='#f6f8fa' variant='outline' borderColor='#d8dee4' w='308px' size="lg" borderRadius={8} boxShadow="lg">
                            <CardBody>
                                <form onSubmit={handleSubmit}>
                                    {error && !isLoggedIn &&
                                        <Alert status='error' variant='solid'>
                                            <AlertIcon />
                                            <AlertTitle>{error}</AlertTitle>
                                        </Alert>}
                                    {isLoggedIn && (
                                        <Alert status="success" variant='solid'>
                                            <AlertIcon />
                                            <AlertTitle>{success}</AlertTitle>
                                        </Alert>
                                    )}

                                    <Stack spacing='4'>
                                        <FormControl isRequired>
                                            <FormLabel size='sm'>Email Address</FormLabel>
                                            <Input
                                                type='text'
                                                bg='white'
                                                borderColor='#d8dee4'
                                                size='sm'
                                                borderRadius='6px'
                                                
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}

                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <HStack justify='space-between'>
                                                <FormLabel size='sm'>Password</FormLabel>
                                                <Button
                                                    as='a'
                                                    href='#'
                                                    variant='link'
                                                    size='xs'
                                                    color='#0969da'
                                                    fontWeight='500'
                                                >
                                                    Forgot password?
                                                </Button>
                                            </HStack>
                                            <Input
                                                type='password'
                                                bg='white'
                                                borderColor='#d8dee4'
                                                size='sm'
                                                borderRadius='6px'
                                                value={password}
                                                onChange={(e) => { setPassword(e.target.value) }}

                                            />
                                        </FormControl>

                                        <Button
                                            type="submit"
                                            bg='#FFBB00'
                                            color='white'
                                            size='sm'
                                            _hover={{ bg: '#FFBB01' }}
                                            _active={{ bg: '#FFBB02' }}
                                        >
                                            {isLoading ? (<CircularProgress isIndeterminate size="24px" color="teal" />
                                            ) : ('Sign In')}
                                        </Button>
                                    </Stack>
                                </form>
                            </CardBody>
                        </Card>
                    </Stack>
                </Center>
            </Flex>
        </Box>
    );
}

export default Login;