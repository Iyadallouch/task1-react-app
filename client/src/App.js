// App.js
import React, { useContext } from "react";
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
import { Context } from "./context/Context";
// import { useContext } from "react";
// import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);

  return (
    <div className="App app-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={user ? <Home /> : <SignUp />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <SignUp />} />
          <Route path="/profile" element={user ? <Profile /> : <SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
