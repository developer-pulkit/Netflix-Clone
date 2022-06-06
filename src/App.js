import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
