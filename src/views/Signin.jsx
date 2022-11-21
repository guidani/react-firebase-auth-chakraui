import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterDomLink } from "react-router-dom";
import { SigninForm } from "../components/SigninForm";

export const Signin = () => {
  return (
    <>
    <Box
      w="100%"
      h="100vh"
      backgroundColor="gray.900"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        backgroundColor="white"
        color="gray.900"
        w="xl"
        p="6"
        borderRadius="6"
      >
        <Heading align="center" fontSize="4xl" marginBottom="6">
          Login
        </Heading>
        <SigninForm/>
        <Flex align='center' justify='space-between' marginTop='2'>

        <Link as={RouterDomLink} to="/register">
          cadastrar
        </Link>
        <Link as={RouterDomLink} to="/forgot-password">
          recuperar senha
        </Link>
        </Flex>
      </Box>
    </Box>
  </>
  )
}
