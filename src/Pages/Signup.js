import React, { useRef } from "react";
import AuthLayout from "../Layouts/auth/authLayout";
import { Button, Form, Input } from "../Styles/formStyles";
import { InputWrapper, Label } from "../Styles/formStyles";
import InputPass from "../Components/ChangePassword/InputPass";
import { registrate } from "../api/http";

const Signup = (props) => {
  const loginRef = useRef();
  const passwordRef = React.createRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const facultyRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault()
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    registrate({
      login: login,
      password: password,
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      faculty:1234
    });
  };
  return (
    <AuthLayout title={props.title}>
      <Form onSubmit={submitHandler}>
        <InputWrapper>
          <Label htmlFor="html">Login</Label>
          <Input ref={loginRef} placeholder="Eg. your login here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Name</Label>
          <Input ref={nameRef} type="text" placeholder="Eg. your name here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Surname</Label>
          <Input
            ref={surnameRef}
            type="text"
            placeholder="Eg. your surname here"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">e-mail</Label>
          <Input type="email" placeholder="Eg. your email here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Phone number</Label>
          <Input
            ref={emailRef}
            type="number"
            placeholder="Eg. your number here"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Faculty</Label>
          <Input
            ref={phoneRef}
            type="number"
            placeholder="Eg. your number here"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Password</Label>
          <InputPass ref={passwordRef} />
        </InputWrapper>
        <Button>Sign up</Button>
      </Form>
    </AuthLayout>
  );
};

export default Signup;
