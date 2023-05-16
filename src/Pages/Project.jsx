import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'



const Project = () => {
  return (
    <Box  width={"100%"}>
      <Box ><Text fontSize="23px" fontWeight="bold" mb="30px">Projects</Text></Box>

<SimpleGrid columns={[1,2,2,3,3]} w={{base:"85%"}} m="auto" gap="20px">
{/* project 1 */}
<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
      <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="fludubai-website.png" alt="giticon" />
    <Box mt="10px" mb="10px" ><Text fontWeight="bold">FlyDubai Website</Text></Box> 
      <Box padding={"10px"} textAlign="center">Developed Flydubai Website Using React js and Next js Framework. City to City, Country to
            Country, Popular destination panels are made by our team.
            <br/>
            <br/>
            ● Banner, Search Widgets, Popular getaways, Explore our destination network are
            majorly done.
            <br/>
            ● All of the pages are made by Dynamic Components fetching data through the
              database.
            <br/>
            ● This website is both mobile and desktop friendly to give the best experience to the
              user.
      </Box>
      <Box>
    
        <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
          <Box>
              <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
            </Box>
            <Box>
              <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
            </Box>
        </Flex>
      </Box>
      <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box > <a href='https://www.flydubai.com/en/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
      </Flex>
    </Box>
    {/* project 1 */}
    {/* project 2 */}
    <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
      <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="dhanguard-website.png" alt="giticon" />
    <Box mt="10px" mb="10px" ><Text fontWeight="bold">Dhanguard Website</Text></Box> 
      <Box padding={"10px"} textAlign="center">
      Developed dhanguard website both desktop and mobile friendly using php laravel
      framework. Html, Css, Bootstrap and Javascript are used for the frontend purpose and php
      is used for backend.
      <br/>
      <br/>
      ● A header is developed for the routing purpose and there are several links so that
      users can go through several pages.
      <br/>
      ● The Home, Plans And For venues section is used to give the information to the user.
      <br/>
      ● And Explore and Resources have several heading so that users can go through
      different sections.
      <br/>
      ● This website is both mobile and desktop friendly to give the best experience to the
      user.
    </Box>
      <Box>
    
        <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
          <Box><Image  w={{base:"30px"}} src="php-logo.avif" alt="JS" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
        </Flex>
      </Box>
      <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box > <a href='https://dhanguard.com/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
      </Flex>
    </Box>
    {/* project 2 */}
    {/* project 3 */}
    <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
      <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="rainbowtex-website.png" alt="giticon" />
    <Box mt="10px" mb="10px" ><Text fontWeight="bold">RainbowTex Website</Text></Box> 
      <Box padding={"10px"} textAlign="center">Developed a responsive Header Section Using PHP Bootstrap and JS.
      <br/>
      <br/>
        ● Developed the header part and implemented several links, likely a mega-menu on
        hover on desktop mode and dropdown on Mobile mode.
      <br/>
        ● To make the header responsive , I’ve used Bootstrap.

    </Box>
      <Box>
    
        <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
            <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
            <Box><Image  w={{base:"30px"}} src="php-logo.avif" alt="JS" /></Box>
            <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
        </Flex>
      </Box>
      <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box > <a href='https://www.rainbowtex.me/en' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
      </Flex>
    </Box>
    {/* project 3 */}
    {/* project 4 */}
    <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
      <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="board-dashboard.png" alt="giticon" />
    <Box mt="10px" mb="10px" ><Text fontWeight="bold">Board Dashboard App</Text></Box> 
      <Box padding={"10px"} textAlign="center">User Signup Page & Login Page using google login. After Login User can go to the dashboard and other feature parts. If users are not logged in , they cannot access the dashboard. The UI is user friendly and responsive for mobile, tablet and desktop ie. all of the devices.
      <br/>
      <br/>
      ● Users can login with google account to access the dashboard.
    </Box>
      <Box>
    
        <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
            <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
          <Box>
              <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
            </Box>
            <Box>
              <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
            </Box>
        </Flex>
      </Box>
      <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box > <a href='https://board-dashboard-app-sp-557.vercel.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
      </Flex>
    </Box>
    {/* project 4 */}
    {/* project 5 */}
    <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
      <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="nxt-trendz-app.png" alt="giticon" />
    <Box mt="10px" mb="10px" ><Text fontWeight="bold">NXT Trendz App Clone</Text></Box> 
      <Box padding={"10px"} textAlign="center">Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..
      <br/>
      <br/>
      ● For login purpose use: username: rahul, password: rahul@2021
    </Box>
      <Box>
    
        <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box><Image  w={{base:"30px"}} src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="html" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="css" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
          <Box><Image  w={{base:"30px"}} src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="JS" /></Box>
          <Box>
              <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
            </Box>
            <Box>
              <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
            </Box>
        </Flex>
      </Box>
      <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
        <Box > <a href='https://nxttrendzappsp.ccbp.tech/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
      </Flex>
    </Box>
    {/* project 5 */}

</SimpleGrid>



    </Box>
  )
}

export default Project