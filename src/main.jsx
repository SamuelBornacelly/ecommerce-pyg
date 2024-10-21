import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <StrictMode>
      <App/>
    </StrictMode>
  </ChakraProvider>
);