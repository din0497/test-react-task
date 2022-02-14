import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Dropdown from "./Components/Navbar/Dropdown";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import "./App.css";

function App() {
  const [drop, setDrop] = useState("hidden");
  const token = useSelector((state) => state.token);


  return (
    <div className="header">
      <Navbar drop={drop} setDrop={setDrop} />
      {drop === "visible" && <Dropdown setDrop={setDrop} />}
      <Routes>
        <Route path="/" element={token? <Main/> : <Login title="SIGN IN"/>} />
        <Route path="/signup" element={<Signup title="REGISTRATION FORM"/>} />
        {!token  && <Route path="/login" element={<Login title="SIGN IN"/>} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
