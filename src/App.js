import React from "react";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Write from "./Pages/Write";
import Profile from "./Pages/Profile";
import "./Pages/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
