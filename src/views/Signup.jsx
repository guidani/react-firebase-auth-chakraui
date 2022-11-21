import { Box, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterDomLink } from "react-router-dom";
import { SignupForm } from "../components/SignupForm";

export const Signup = () => {
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
            Cadastrar
          </Heading>
          <SignupForm />
          <Link as={RouterDomLink} to="/">
            voltar
          </Link>
        </Box>
      </Box>
    </>
  );
};
