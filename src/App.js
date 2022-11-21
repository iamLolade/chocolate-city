import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArtistList from "./components/ArtistList";
import ArtistDetails from "./components/ArtistDetails";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Box>
        <main>
          <Routes>
            <Route path='artist/:id' element={<ArtistDetails />} />
            <Route exact path='/artist' element={<ArtistList />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </main>
      </Box>
    </>
  );
}

export default App;
