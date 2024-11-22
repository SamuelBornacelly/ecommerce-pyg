import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ChakraProvider>
);
