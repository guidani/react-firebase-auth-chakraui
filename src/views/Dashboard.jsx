import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { UserDataTable } from "../components/UserDataTable";
import { useUserAuth } from "../hooks/useUserAuth";

export const Dashboard = () => {
  // const { logOut, user } = useUserAuth();
  // const navigate = useNavigate();

  // const handleLogOut = async () => {
  //   try {
  //     await logOut();
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  return (
    <>
      {/* <Box marginBottom="4">
        <Navbar handleLogOut={handleLogOut} user={user}/>
      </Box> */}
      <UserDataTable />
    </>
  );
};
