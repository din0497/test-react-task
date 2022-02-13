import {
  AuthContainer,
  SingningContainer,
  MainLogo,
} from "../../Styles/authStyles";
import { BoldText } from "../../Styles/mainStyles";



const AuthLayout = (props) => {

  return (
    <AuthContainer>
      <SingningContainer>
        <BoldText>LOGO</BoldText>
        {props.children}
      </SingningContainer>
      <MainLogo>
        <h2>LOGO</h2>
        <h1 style={{width: '250px'}}>{props.title}</h1>
      </MainLogo>
    </AuthContainer>
  );
};

export default AuthLayout;
