import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ArtistList from "./components/ArtistList";
import ArtistDetails from "./components/ArtistDetails";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Box p={30} mt={10}>
        <main>
          <Routes>
            <Route path='/:id' element={<ArtistDetails />} />
            <Route exact path='/' element={<ArtistList />} />
          </Routes>
        </main>
      </Box>
    </>
  );
}

export default App;
