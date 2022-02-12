import AuthLayout from "../Layouts/auth/authLayout";
import { Button, Form, Input } from "../Styles/formStyles";
import { InputWrapper, Label } from "../Styles/formStyles";
import InputPass from "../Components/ChangePassword/InputPass";

const Signup = (props) => {
  return (
    <AuthLayout title={props.title}>
      <Form>
        <InputWrapper>
          <Label htmlFor="html">Login</Label>
          <Input placeholder="Eg. your login here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Name</Label>
          <Input type="text" placeholder="Eg. your name here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Surname</Label>
          <Input type="text" placeholder="Eg. your surname here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">e-mail</Label>
          <Input type="email" placeholder="Eg. your email here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Phone number</Label>
          <Input type="number" placeholder="Eg. your number here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Faculty</Label>
          <Input type="number" placeholder="Eg. your number here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Password</Label>
          <InputPass />
        </InputWrapper>
        <Button>Change</Button>
      </Form>
    </AuthLayout>
  );
};

export default Signup;
