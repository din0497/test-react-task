import { DropLi } from "../../Styles/navbarStyle";
const DropButton = ({ text, onClick }) => {
  return <DropLi onClick={onClick}>{text}</DropLi>;
};

export default DropButton;
