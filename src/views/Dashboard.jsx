import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  return (
    <>
      <Box marginBottom="4">
        <Navbar />
      </Box>
      <Outlet />
    </>
  );
};
