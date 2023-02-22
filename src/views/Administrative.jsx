import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useUserAuth } from "../hooks/useUserAuth";

export const Administrative = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box marginBottom="4">
        <Navbar handleLogOut={handleLogOut} user={user} />
      </Box>
      <Container maxW="container.lg">
        {user.isAdmin ? <p>é adm</p> : <p>Não é adm</p>}
        <div>Bem vindo admin</div>
      </Container>
    </>
  );
};
