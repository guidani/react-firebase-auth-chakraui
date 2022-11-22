import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterDomLink } from 'react-router-dom'
import React from "react";

export const Navbar = () => {
  return (
    <>
      <Flex align="center" justify="space-between" marginTop="4" px="4">
        <Box>
          <Link
            bg="teal.500"
            color="white"
            p="2"
            borderRadius="4"
            href="/dashboard"
            marginRight="2"
          >
            Página Inicial
          </Link>
          <Link as={RouterDomLink} to='/administrativo' bg="teal.500" color="white" p="2" borderRadius="4">
            Administrativo
          </Link>
        </Box>
        <Box>
          <Link bg="teal.500" color="white" p="2" borderRadius="4" href="/">
            Sair
          </Link>
        </Box>
      </Flex>
    </>
  );
};
