import React from 'react'
import { Link } from 'react-router-dom'
import homeM from "../assets/homeMain.jpg"
import fM from "../assets/fmain.jpg"
import us from "../assets/usa.jpeg"
import fDa from "../assets/fRanceHdemo.jpg"
import iTdb from "../assets/ItalyH.jpg"
import gerdc from "../assets/gerHDemo.jpg"
import ausdd from "../assets/AusHdemo.jpg"
import whyus from "../assets/amuseWhyus.jpg"
import candH from "../assets/candH.jpg"
import singHde from "../assets/singaporeHome.jpg"
import denMdf from "../assets/denMdf.jpg"
import traBl from "../assets/blogHome.jpg"
import wow from "../assets/wowHo.jpg"
import bestStory from "../assets/bestStory.jpg"
import aboutH from "../assets/aboutH.png"

import { Box, Heading, Text, Grid, GridItem, Image, Button, Flex, Stack } from '@chakra-ui/react'
export const Home = () => {
  return (
    <Box className="head">
      {/* Banner */}
      <Box className="banner">
        <img src={homeM} alt="" />
      </Box>

      {/* About */}
      <Flex w="90%" m="auto" mt="8vh" h="60vh" justifyContent="space-between">
        <Box w="60%" m="auto" p="2%" >
          <Heading as="h2" color="#0064A2">About Us</Heading>
          <Text fontSize="md" pt="2%">
            The best place for you depends on your preferences: whether you seek city life, nature, or cultural experiences. Consider climate, lifestyle, career opportunities, and cost of living to find your ideal location.
          </Text>
          <Link to="/blogs"><Button m="auto" border="2px solid #FFBB02" paddingRight="20px" paddingLeft="20px" paddingTop="10px" paddingBottom="10px" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Learn More</Button>
          </Link>
        </Box>
        <Box w="40%">
          <Image src={aboutH} alt="" h="100%" m="auto" borderRadius="50%" />
        </Box>
      </Flex>


      {/* Providing Options */}
      <Box mt="6vh">
        <Heading as="h2" mt="2" color="#0064A2">Explore The Top Destinations</Heading>
        <Text mt="2">Exploring top destinations worldwide promises a tapestry of experiences. From the ancient wonders of Rome to the natural beauty of the Grand Canyon and the vibrant streets of Tokyo, these destinations offer a kaleidoscope of culture, history, and breathtaking landscapes waiting to be discovered.</Text>
        <Link to="/destination"> <Button m="auto" border="2px solid #FFBB02" paddingRight="20px" paddingLeft="20px" paddingTop="10px" paddingBottom="10px" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Learn More</Button></Link>
      </Box>

      <Grid w="90%" m="auto" mt="6vh" templateColumns='repeat(3, 1fr)' gap="4">
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>
        <GridItem bgColor="#DCDCDB" borderRadius="20px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Stack h="99%">
            <Box m="auto" mt="2" w="95%">
              <Image src={us} w="99%" alt="notLoaded" m="auto" borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-around">
              <Text as="b" fontSize='2xl' color='blue'>USA</Text>
              <Text as="b" fontSize='2xl'>$ 180000</Text>
            </Flex>
            <Box>
              <Text as="mark" fontSize='3xl'>✰ 4.5</Text>
            </Box>
            <Button w="90%" m="auto" bgColor="#0064A2" color="white" mb="2">BOOK</Button>
          </Stack>
        </GridItem>

      </Grid>

      {/* Image Show */}

      <Flex justifyContent="space-around" mt="8vh" h="31vh">
        <Box mt="1vh">
          <Image src={fDa} w="99%" h="28vh" borderRadius="25%" />
        </Box>
        <Box mt="1vh">
          <Image src={iTdb} w="99%" h="28vh" borderRadius="25%" />

        </Box>  <Box mt="1vh">
          <Image src={ausdd} w="99%" h="28vh" borderRadius="25%" />

        </Box>  <Box mt="1vh">
          <Image src={gerdc} w="99%" h="28vh" borderRadius="25%" />

        </Box>
      </Flex>

      {/* Why Us Section */}

      <Flex w="80%" m="auto" mt="8vh" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
        <Box w="60%" h="90%" m="auto" p="2%" >
          <Heading as="h2" color="#0064A2">Why Choose Us</Heading>
          <Text fontSize="md" pt="2%">
            Choose us for hassle-free travel experiences. Benefit from expertly curated destinations, unbeatable deals, and reliable, customer-centric service. Trust our verified reviews and explore confidently with our user-friendly platform. Join us to unlock unforgettable adventures effortlessly.          </Text>
          <Button m="auto" border="2px solid #FFBB02" paddingRight="20px" paddingLeft="20px" paddingTop="10px" paddingBottom="10px" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Learn More</Button>
        </Box>
        <Box w="40%">
          <Image src={whyus} alt="" w="100%" />
        </Box>
      </Flex>


      <Flex w="80%" m="auto" h="80vh" mt="8vh" justifyContent="space-between">

        <Box m="auto" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image w="100%" h="60vh" src={singHde} alt="" />
          <Button m="auto" border="2px solid #FFBB02" paddingRight="10px" paddingLeft="10px" paddingTop="5px" paddingBottom="5px" mb="3vh" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Singapore</Button>
        </Box>
        <Box m="auto" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image w="100%" h="60vh" src={candH} alt="" />
          <Button m="auto" border="2px solid #FFBB02" paddingRight="10px" paddingLeft="10px" paddingTop="5px" paddingBottom="5px" mb="3vh" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Canada</Button>
        </Box>
        <Box m="auto" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image w="100%" h="60vh" src={denMdf} alt="" />
          <Button m="auto" border="2px solid #FFBB02" paddingRight="10px" paddingLeft="10px" paddingTop="5px" paddingBottom="5px" mb="3vh" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Denmark</Button>
        </Box>
      </Flex>

      {/* Blogs */}
      <Flex w="80%" m="auto" mt="8vh" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
        <Box w="60%" h="90%" m="auto" p="2%" >
          <Heading as="h2" color="#0064A2">Blogs</Heading>
          <Text fontSize="md" pt="2%">
            Discover captivating travel blogs by fellow tourists. Gain firsthand insights, insider tips, and diverse perspectives to fuel your wanderlust. Explore hidden gems and practical advice for your next adventure.
          </Text>
          <Link to="/blogs"><Button m="auto" border="2px solid #FFBB02" paddingRight="20px" paddingLeft="20px" paddingTop="10px" paddingBottom="10px" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Learn More</Button>
          </Link>
        </Box>
        <Box w="40%">
          <Image src={traBl} alt="" m="auto" borderRadius="50%" mt="5%" />
        </Box>
      </Flex>

      {/* Find Best Place */}

      <Flex w="90%" m="auto" mt="8vh" justifyContent="space-between">
        <Box w="30%" m="auto" p="2%" >
          <Heading as="h2" color="#0064A2">Find The Best Place For You</Heading>
          <Text fontSize="md" pt="2%">
            The best place for you depends on your preferences: whether you seek city life, nature, or cultural experiences. Consider climate, lifestyle, career opportunities, and cost of living to find your ideal location.
          </Text>
          <Link to="/destinations"><Button m="auto" border="2px solid #FFBB02" paddingRight="2%" paddingLeft="1%" paddingTop="1%" paddingBottom="1%" fontSize="18px" backgroundColor="#FFBB00" color="white" marginTop="20px" borderRadius="10px">Learn More</Button>
          </Link>
        </Box>
        <Box w="70%">
          <Image src={wow} alt="" h="100%" m="auto" />
        </Box>
      </Flex>
      <Stack m="auto" mt="6vh">
        <Heading as="h2" alignContent="center" color="#0064A2">Our Story</Heading>
        <Box position="relative"  mt="3vh"  h="60vh" ml="14%">
          <Box w="80%" m="auto" alignContent="center" zIndex="1" position="absolute">
            <Image w="100%" h="60vh" src={bestStory} alt="GoldenTemple" />
          </Box>
          <Box w="55%" m="auto" mt="40vh" ml="13%" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" position="absolute" zIndex="2" borderRadius="20px"  backgroundColor="white">
            <Box pt="2%">
              <Text fontSize={["sm", "md", "lg"]} textAlign="center">Visiting Amritsar's Golden Temple was a spiritual awakening. The shimmering temple amidst bustling streets exuded tranquility. Standing by the sacred Sarovar, the hymns' resonance stirred an indescribable sense of peace. Inside, the spiritual ambiance, coupled with selfless langar service, left a lasting impression. Exploring the city's flavors and vibrant culture added depth to this soulful journey. Departing, I carried not just memories but an enriched spirit from the Golden Temple's divine aura. </Text>
            </Box>
          </Box>



        </Box>
      </Stack>





      <Box w="70%" h="50vh" position="relative" ml="15%" mt="10vh" >
        <Image src={fM} alt="" w="99%" h="45vh" />
        {/* <div style={{ width: "55%", margin: "auto", position: "absolute", marginLeft: "250px", bottom: "220px", }}>
          <div style={{ width: "90%", margin: "auto", paddingLeft: "30px", paddingRight: "30px", paddingTop: "40px" }}>
            <h1 style={{ fontFamily: "sans-serif", fontWeight: "700", lineHeight: "35px", fontSize: "30px", color: "grey" }}><span style={{ color: "orange" }}>Subscribe</span> <span style={{ color: "black" }}>And Be</span> <span style={{ color: "orange" }}>Updated</span> </h1>
          </div>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", borderRadius: "20px", width: "100%", margin: "auto", position: "absolute", marginLeft: "20px", bottom: "-140px", backgroundColor: "white" }}>
            <div style={{ width: "100%", margin: "auto", paddingTop: "20px", paddingBottom: "20px" }}>
              <h1 style={{ fontFamily: "sans-serif", lineHeight: "35px", fontSize: "17px", color: "grey" }}>
                Enter Your E-Mail and Get All Laterst Update
                <button style={{ border: "1px solid black", marginLeft: "100px", borderRadius: "20px", paddingLeft: "15px", paddingRight: "15px", backgroundColor: "#FF6F00", color: "white", fontFamily: "sans-serif", fontWeight: "700", }}>Subscribe</button>
              </h1>   
            </div>
          </div>
        </div> */}
      </Box> 
    </Box>
  )
}

