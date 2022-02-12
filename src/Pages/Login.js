import AuthLayout from "../Layouts/auth/authLayout";
import { Button, Form, Input } from "../Styles/formStyles";
import { InputWrapper, Label } from "../Styles/formStyles";
import InputPass from "../Components/ChangePassword/InputPass";

const Login = (props) => {
  return (
    <AuthLayout title={props.title}>
      <Form>
        <InputWrapper>
          <Label htmlFor="html">Login</Label>
          <Input placeholder="Eg. your pasword here" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="html">Password</Label>
          <InputPass />
        </InputWrapper>
        <a>Signup</a>
        <Button>Sign in</Button>
      </Form>
    </AuthLayout>
  );
};

export default Login;
