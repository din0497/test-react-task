import React, { useRef } from "react";
import Content from "../../Layouts/Content";
import { BoldText, FootText, PlainText } from "../../Styles/mainStyles";
import {
  InputWrapper,
  Form,
  Button,
  Label,
  Input,
} from "../../Styles/formStyles";

const Forward = () => {
  const emailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    console.log(email);
  }

  return (
    <Content>
      <BoldText tpe={true} bottom="10px">Change email address</BoldText>
      <PlainText tpe={true}>
        TDAU is not responsible for any lost message due to the activation of
        the forwarding service. Valid messages are those stored in the server
        with domain: student@tdau.uz Make sure you regularly delete the messages
        stored on this server.
      </PlainText>
      <Form onSubmit={submitHandler} margin='50px 0 0 0'>
        <InputWrapper>
          <Label htmlFor="html">Forwarding e-mail address:</Label>
          <Input ref={emailRef} type="email" placeholder="Eg. your phone number here" />
        </InputWrapper>
        <InputWrapper isTrue={true}>
          <Label isTrue={true} htmlFor="html">Disable forwarding:</Label>
          <Input isTrue={true} type="radio" />
        </InputWrapper>
        <Button>Change</Button>
      </Form>
      <FootText>Last e-mail change: 29/07/2021 22:09 - IP 151.33.106.247</FootText>
    </Content>
  );
};

export default Forward;
