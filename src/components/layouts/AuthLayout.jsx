import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <Flex align="center" justify="center">
      <Outlet />
    </Flex>
  );
};
