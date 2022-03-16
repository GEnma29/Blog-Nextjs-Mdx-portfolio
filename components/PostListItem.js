import { Box, Heading, Flex, Text, Tag } from "@chakra-ui/react";
const PostListItem = ({ title, date, tags }) => {
    return (
        <Box borderBottom="1px" borderColor="teal.500" p="4">
        <Heading color={'teal'}  size={["sm","sm","md","md"]} my={2}>
          {title}
        </Heading>
        <Flex align="center" fontSize="sm" color="grayblue.100">
          <Text ml={1}>
            {date}{" "}
            {tags.map((tag) => (
              <Tag key={tag} size="sm" mx={2} colorScheme="brand">
                {tag}
              </Tag>
            ))}
          </Text>
        </Flex>
      </Box>
      );
    };

export default PostListItem
