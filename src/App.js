import React from "react";
import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navbar />
      <Box p={20} mt={4}>
        <main>
          <Header title='All Chocolate City Artist Artists' />
          <Box>

          </Box>
        </main>
      </Box>
    </>
  );
}

export default App;
