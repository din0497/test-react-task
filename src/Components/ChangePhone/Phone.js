import React, { useRef } from "react";
import {useSelector} from 'react-redux'
import Content from "../../Layouts/Content";
import { BoldText, FootText, PlainText } from "../../Styles/mainStyles";
import {
  InputWrapper,
  Form,
  Button,
  Label,
  Input,
} from "../../Styles/formStyles";
import { changePhone } from "../../api/http";

const Phone = () => {
  const {token, userInfo} = useSelector((state) => state);
  const phoneRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault()
    const phone = phoneRef.current.value;
    changePhone(phone, token);
  }

  return (
    <Content>
      <BoldText tpe={true} bottom="10px">
        Change Phone number
      </BoldText>
      <PlainText tpe={true}>
        Phone no. currently registered ({userInfo.phone})
        <br /> Available services: EXAMS; HELP DASK; ELECTIONS;
      </PlainText>
      <Form onSubmit={submitHandler} margin="50px 0 0 0">
        <InputWrapper>
          <Label htmlFor="html">New phone number:</Label>
          <Input ref={phoneRef} type="number" placeholder="Eg. your phone number here" />
        </InputWrapper>
        <InputWrapper isTrue={true}>
          <Label isTrue={true} htmlFor="html">
            Disable forwarding:
          </Label>
          <Input isTrue={true} type="radio" />
        </InputWrapper>
        <Button>Send</Button>
      </Form>
      <FootText isTrue={true}>
        Last phone number change: 29/07/2021 22:09 22:09 - IP 151.33.106.247
      </FootText>
    </Content>
  );
};

export default Phone;
