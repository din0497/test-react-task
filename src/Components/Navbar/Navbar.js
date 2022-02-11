import Navs from "./Navs";
import { Brand, Header } from "../../Styles/navbarStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../App.css";
const Navbar = ({ setDrop }) => {
  const clickHandler = () => {
    setDrop("visible");
    document.body.style.overflow = "hidden";
  };

  return (
    <Header>
      <Brand>LOGO</Brand>
      <Navs />
      <GiHamburgerMenu onClick={clickHandler} size={20} className="icon" />
    </Header>
  );
};

export default Navbar;
