import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'

export const UserDataTable = () => {
  const [userData, setUserData] = useState();

  if(!userData) return <p>Não há dados para serem exibidos!</p>

  return (
    <>
      <Heading as='h1'>Dados do usuário</Heading>
      <Box>
        <p>{userData}</p>
      </Box>
    </>
  )
}
