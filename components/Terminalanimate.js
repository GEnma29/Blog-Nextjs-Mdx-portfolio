import React from "react";
import { Flex, Text, Box, Icon } from "@chakra-ui/react";




const Terminalanimate = ({ code, firstComand, secoundComand }) => {
  return (
    <>
      <div className="Glass">
        <Flex
          w="100%"
          position="absolute"
          top="5px"
          justifyContent="space-between"
        >
          <Box ml={1}>
            <Icon viewBox="0 0 200 200" color="red.500">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Icon viewBox="0 0 200 200" color="gray.400">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Icon viewBox="0 0 200 200" color="gray.400">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          </Box>
          <Text mr="45%">bash</Text>
        </Flex>
        <Flex justifyItems="flex-start" flexDirection="column" m={2}>
          <Flex flexDirection="row">
            <Text color="teal">{`/user/pc1: Enmanuel dev init ... `}</Text>
          </Flex>
          <Text>{secoundComand}</Text>
          <Text>{code}</Text>
        </Flex>
      </div>

      <style jsx>{`
        .Glass {
          display: flex;
          flex-direction: column;
          width: 300px;
          height: 150px;
          align-items: center;
          justify-content: center;
          background: rgba(14, 122, 175, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </>
  );
};

export default Terminalanimate;
