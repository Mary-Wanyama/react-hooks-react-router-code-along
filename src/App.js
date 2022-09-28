import React from "react";
import {Routes, Route} from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App
