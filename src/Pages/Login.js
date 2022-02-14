import React, { useRef, useEffect } from "react";
import AuthLayout from "../Layouts/auth/authLayout";
import { Button, Form, Input } from "../Styles/formStyles";
import { InputWrapper, Label } from "../Styles/formStyles";
import InputPass from "../Components/ChangePassword/InputPass";
import { Link } from "react-router-dom";
import { logIn } from "../Redux/reducers/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginRef = useRef();
  const passwordRef = React.createRef();

  const token = useSelector((state) => state.token);

  const submitHandler = (e) => {
    e.preventDefault();
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    dispatch(logIn(login, password));
    console.log(
      dispatch(
        logIn(login, password, () => {
          navigate("/", { replace: true });
        })
      )
    );
  };
  return (
    <AuthLayout title={props.title}>
      <Form onSubmit={submitHandler}>
        <InputWrapper>
          <Label htmlFor="html">Login</Label>
          <Input ref={loginRef} placeholder="Eg. your pasword here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Password</Label>
          <InputPass ref={passwordRef} />
        </InputWrapper>
        <Link to="/signup">Signup</Link>
        <Button>Sign in</Button>
      </Form>
    </AuthLayout>
  );
};

export default Login;
