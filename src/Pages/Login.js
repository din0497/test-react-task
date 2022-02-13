import React, { useRef } from "react";
import AuthLayout from "../Layouts/auth/authLayout";
import { Button, Form, Input } from "../Styles/formStyles";
import { InputWrapper, Label } from "../Styles/formStyles";
import InputPass from "../Components/ChangePassword/InputPass";
import { Link } from "react-router-dom";
import { logIn } from "../api/http";

const Login =  (props) => {
  const loginRef = useRef();
  const passwordRef = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault()
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    logIn(login, password)
  }
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
