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
  const user = true;
  return (
    <div className="app-wrapper">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={user ? <Home /> : <Login />}></Route>
            <Route path="/signup" element={user ? <Home /> : <SignUp />}></Route>
            <Route path="/write" element={user ? <Write /> : <SignUp />}></Route>
            <Route path="/profile" element={user ? <Profile /> : <SignUp />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
