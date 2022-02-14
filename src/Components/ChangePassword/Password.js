import React from "react";
import Content from "../../Layouts/Content";
import { Label, InputWrapper, Form, Button } from "../../Styles/formStyles";
import { BoldText, FootText, PlainText } from "../../Styles/mainStyles";
import InputPass from "./InputPass";
import { useSelector } from "react-redux";
import { changePassword } from "../../api/http";

const Password = () => {
  const currentPasswordRef = React.createRef();
  const newPasswordRef = React.createRef();
  const confirmedPasswordRef = React.createRef();

  const token = useSelector((state) => state.token);

  const reset = () => {
    currentPasswordRef.current.value = "";
    newPasswordRef.current.value = "";
    confirmedPasswordRef.current.value = "";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const currentPassword = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmedPassword = confirmedPasswordRef.current.value;

    changePassword(
      { old: currentPassword, new: newPassword, confirm: confirmedPassword },
      token
    );

    reset();
  };
  return (
    <Content>
      <BoldText tpe={true} bottom="10px">
        Change Password
      </BoldText>
      <PlainText tpe={true}>
        We suggest you to change your password regularly
      </PlainText>
      <Form onSubmit={submitHandler}>
        <InputWrapper>
          <Label htmlFor="html">Current password:</Label>
          <InputPass ref={currentPasswordRef} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">New password:</Label>
          <InputPass ref={newPasswordRef} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Confirm password:</Label>
          <InputPass ref={confirmedPasswordRef} />
        </InputWrapper>
        <Button>Change</Button>
      </Form>
      <FootText>
        Last password change: 29/07/2021 22:09 - IP 151.33.106.247
      </FootText>
    </Content>
  );
};

export default Password;
