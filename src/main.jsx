import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import { AppRouter } from "./router/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <UserAuthContextProvider>
          <AppRouter />
        </UserAuthContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
