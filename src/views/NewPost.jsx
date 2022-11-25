import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { NewPostForm } from "../components/NewPostForm";

export const NewPost = () => {
  return (
    <>
    <Center>
      <VStack spacing='10' marginTop='10'>
        <Box>
          <Heading>Novo Post</Heading>
        </Box>
        <NewPostForm />
      </VStack>
      </Center>
    </>
  );
};
