import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Dropdown from "./Components/Navbar/Dropdown";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  const [drop, setDrop] = useState("hidden");

  return (
    <div className="header">
      <Navbar drop={drop} setDrop={setDrop} />
      {drop === "visible" && <Dropdown setDrop={setDrop} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup title="REGISTRATION FORM"/>} />
        <Route path="/login" element={<Login title="SIGN IN"/>} />
      </Routes>
    </div>
  );
}

export default App;
