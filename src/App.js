import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Dropdown from "./Components/Navbar/Dropdown";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import "./App.css";

function App() {
  const [drop, setDrop] = useState("hidden");

  return (
    <div className="header">
      
      <Navbar drop={drop} setDrop={setDrop} />
      {drop === "visible" && <Dropdown setDrop={setDrop} />}
      <Login title="SIGN IN"/>
      {/* <Signup title="REGISTRATION FORM"/> */}

    </div>
  );
}

export default App;
