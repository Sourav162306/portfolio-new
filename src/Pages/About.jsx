import { Box, Text } from "@chakra-ui/react";
import React from "react";


const About = () => {
  return (
    <Box w="100%"  height={{base:"100%",sm:"100%",md:"100%"}} mt="200px" mb="130px">
      <Box w={{base:"80%",sm:"80%",md:"75%"}}  paddingBottom={"30px"}  m="auto" textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize="23px">
          About Me
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text fontWeight={"bold"} fontSize="20px" textAlign="left">
          {" "}
          I'm Sourav Paul
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text textAlign={"left"}>
            I am Full Stack Web Developer with one year of work professional experience on both frontend and backend. I have worked on  React Js, Laravel PHP, and Node Js Framework.
        </Text>
      </Box>
      <br/>
      <br/>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text fontWeight={"bold"} fontSize="20px" textAlign="left">
          {" "}
          Education
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text textAlign={"left"}>
          National Institute of Technology Agartala, Tripura
          <br/>
          Bachelor of Technology, 2017 – 2021
          <br/>
          Pursuing Civil Engineering with a CGPA of 7.25
        </Text>
      </Box>
      <br/>
      <br/>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text fontWeight={"bold"} fontSize="20px" textAlign="left">
          {" "}
          Work Experience
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text textAlign={"left"}>
            <strong>1. Software Developer</strong>
            <br/>
            Terbium Solutions Pvt. Ltd.
            <br/>
            Mumbai, Maharashtra, India
            <br/>
            Oct 2022 - Present
            <br/><br/>
            <strong>2. Full Stack development internship</strong>
            <br/>
            NxtWave
            <br/>
            Fellow at NxtWave’s CCBP 4.0 Intensive
            <br/>
            Mar 2022 - Oct 2022

        </Text>
      </Box>
    </Box>
  );
};

export default About;
