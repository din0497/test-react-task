import DropButton from "./DropButton";
import { DropContainer, DropUl } from "../../Styles/navbarStyle";

const Dropdown = ({ setDrop }) => {
  const clickHandler = () => {
    setDrop("hidden");
    document.body.style.overflow = "visible";
  };
  return (
    <DropContainer onClick={clickHandler}>
      <DropUl onClick={(e) => e.stopPropagation()}>
        <DropButton  text="Module" />
        <DropButton  text="Log in" />
      </DropUl>
    </DropContainer>
  );
};

export default Dropdown;
