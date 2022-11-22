import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterDomLink } from "react-router-dom";

export const Navbar = ({ handleLogOut, user }) => {
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
            as={RouterDomLink}
          >
            Página Inicial
          </Link>

          <Link
            as={RouterDomLink}
            to="/administrativo"
            bg="teal.500"
            color="white"
            p="2"
            borderRadius="4"
          >
            Administrativo
          </Link>
        </Box>
        {user && <Text>Bem-vindo(a): {user.email}</Text>}
        <Box>
          <Link
            bg="teal.500"
            color="white"
            p="2"
            borderRadius="4"
            onClick={handleLogOut}
          >
            Sair
          </Link>
        </Box>
      </Flex>
    </>
  );
};
