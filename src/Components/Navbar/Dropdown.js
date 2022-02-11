import DropButton from "./DropButton";
import { DropContainer, DropUl } from "../../Styles/navbarStyle";

const Dropdown = ({ setDrop }) => {
  const clickHandler = () => {
    setDrop("hidden");
    document.body.style.overflow = "visible";
  };
  const logoutHandler = () => {
    clickHandler();
  };
  return (
    <DropContainer onClick={clickHandler}>
      <DropUl onClick={(e) => e.stopPropagation()}>
        <DropButton  text="Home" />
        <DropButton  text="About" />
        <DropButton  text="Projects" />
        <DropButton  text="Blog" />
        <DropButton  text="Log in" />
      </DropUl>
    </DropContainer>
  );
};

export default Dropdown;
