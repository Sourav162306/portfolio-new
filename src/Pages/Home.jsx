import React from "react";
import Typewriter from "typewriter-effect";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <Box  width="100%" mt="200px" mb="100px">
      <Flex w="80%" m="auto" alignItems={"center"} gap="20px" direction={{base:"column-reverse",sm:"column-reverse",md:"row"}}>
        <Box width={{base:"90%",sm:"50%"}} m="auto" h="280px" pt="20px">
          <Box>
            <Text
              color={"#06d6a0"}
              fontSize={{ base: "22px", sm: "24px", md: "26px", lg: "27px" }}
              fontWeight="bold"
            >
              Hi, 👋
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "22px", sm: "24px", md: "26px", lg: "26px" }}
              fontWeight="bold"
            >
              I'm Sourav Paul
            </Text>
          </Box>
          <Box
            color={"#06d6a0"}
            fontSize={{ base: "16px", sm: "17px", md: "18px", lg: "19px" }}
            fontWeight="bold"
          >
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: ["a Coder", "Full-Stack Developer", "React Developer"],
              }}
            />
          </Box>

          <Box textAlign={"center"}  mt="20px" >
            <Text
              fontSize="18px"
              fontWeight="bold"
              mb="10px"
            >
              Connect me here
            </Text>
            <Box display={"flex"} gap="20px" justifyContent={"center"}>
              <a
                href="https://www.linkedin.com/in/souravpaul1998/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin color="#0274b3" fontSize={"25px"} />
              </a>
              <a
                href="https://github.com/Sourav162306"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub fontSize={"25px"} />
              </a>
            </Box>
          </Box>

          <Button bg={"#06d6a0"} size={{base:"sm",sm:"sm",md:"md"}} mt={"20px"}>
            <a href="sourav-paul-new-resume.pdf" target="_blank" download rel="noreferrer">
              Resume
            </a>
          </Button>
        </Box>

        <Box width={{base:"90%",sm:"50%"}} h={{base:"250px",sm:"280px"}} >
          <Image
            w={{base:"250px",sm:"280px"}}
            height="100%"
            m="auto"
            borderRadius={"50%"}
            src="profile-pic-sourav.jpg"
            alt="Sourav"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
