import { Nav, Wrapper } from "../../Styles/navbarStyle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogOut } from "../../Redux/reducers/auth";
// import "../../App.css";

const Navs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  return (
    <Wrapper>
      <Nav>Module</Nav>
      <Nav>News</Nav>
      <Nav>Resources</Nav>
      <Nav>Help</Nav>
      {token && (
        <Nav>
          <Link to="/">Profile</Link>
        </Nav>
      )}

      {!token ? (
        <Nav>
          <Link to="/login">Login</Link>{" "}
        </Nav>
      ) : (
        <Nav
          onClick={() =>
            dispatch(userLogOut(() => navigate("/", { replace: true })))
          }
        >
          Logout
        </Nav>
      )}
    </Wrapper>
  );
};

export default Navs;
