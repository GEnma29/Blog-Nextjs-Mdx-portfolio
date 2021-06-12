import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import {
  Flex,
  Heading,
  Box,
  Text,
  Center,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Index({ posts }) {
  const color = useColorModeValue("gray.800", "white");
  return (
    <Layout>
      <Navbar />
      <Heading as="h1" size="xl">
        👋 Hola!
      </Heading>
      <Text mt={(2, 4)} fontSize={["md", "md", "lg", "lg"]}>
      Bienvenido a este pequeño blog sobre programación, aquí tocaremos tutoriales tips buenas y todo lo que nos ayude a crecer en el mundo dev.
      </Text>
      <Flex p="2" align="center" justify="center">
        <ul>
          {posts.map((post) => (
            <Box
              m="4"
              maxW={["lg", "md", "sm", "sm"]}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box p={2}>
                <motion.div
                >
                  <li key={post.filePath}>
                    <Link
                      as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                      href={`/posts/[slug]`}
                    >
                      <Box
                        color={color}
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="lg"
                        ml="2"
                      >
                        <Button variant="link">
                          <a>{post.data.title}</a>
                        </Button>
                      </Box>
                    </Link>
                    <Box
                      color={color}
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="sm"
                      ml="2"
                    >
                      <p> Autor : {post.data.Autor}</p>
                    </Box>
                    <Box as="span" color={color} fontSize="xs">
                      <p>{post.data.description}</p>
                    </Box>
                  </li>
                </motion.div>
              </Box>
            </Box>
          ))}
        </ul>
      </Flex>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
