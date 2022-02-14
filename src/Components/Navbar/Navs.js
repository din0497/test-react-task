import { Nav, Wrapper } from "../../Styles/navbarStyle";
import { Link } from "react-router-dom";
// import "../../App.css";

const Navs = () => {
  return (
    <Wrapper>
      <Nav>Profile</Nav>
      <Nav>News</Nav>
      <Nav>Resources</Nav>
      <Nav>Help</Nav>
      <Nav>
        <Link to="/">Profile</Link>
      </Nav>

      <Nav>
        <Link to="/login">Login</Link>
      </Nav>
    </Wrapper>
  );
};

export default Navs;
