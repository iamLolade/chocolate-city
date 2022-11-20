import React from "react";
import { ToastContainer } from "react-toastify";
import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArtistList from "./components/ArtistList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Box p={30} mt={10}>
        <main>
          <Header title='All Chocolate City Artist Artists'/>
          <Box p={20} mt={10}>
            <ArtistList />
          </Box>
        </main>
      </Box>
    </>
  );
}

export default App;
