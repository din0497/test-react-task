import Content from "../../Layouts/Content";
import { Label, InputWrapper, Form, Button } from "../../Styles/formStyles";
import { BoldText, FootText, PlainText } from "../../Styles/mainStyles";
import InputPass from "./InputPass";
const Password = () => {
  return (
    <Content>
      <BoldText tpe={true} bottom="10px">Change Password</BoldText>
      <PlainText tpe={true}>
        We suggest you to change your password regularly
      </PlainText>
      <Form>
        <InputWrapper>
          <Label htmlFor="html">Current passwor:</Label>
          <InputPass />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Current passwor:</Label>
          <InputPass />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Current passwor:</Label>
          <InputPass />
        </InputWrapper>
        <Button>Change</Button>
      </Form>
      <FootText >Last password change: 29/07/2021 22:09 - IP 151.33.106.247</FootText>
    </Content>
  );
};

export default Password;
