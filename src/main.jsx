import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { BigSpinner } from "./components/BigSpinner";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<BigSpinner />} />
    </ChakraProvider>
  </React.StrictMode>
);
