import { Box, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

export const UserDataTable = () => {
  const [userData, setUserData] = useState();

  if (!userData)
    return (
      <>
        <Container maxW="container.lg">
          <Heading as="h1">Dados do usuário</Heading>
          <Box>
            <p>Não há dados para serem exibidos!</p>
          </Box>
        </Container>
      </>
    );

  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h1">Dados do usuário</Heading>
        <Box>
          <p>{userData}</p>
        </Box>
      </Container>
    </>
  );
};
