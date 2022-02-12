import { MainContents } from "../Styles/mainStyles";
import UserProfile from "../Components/User/UserProfile";
import Password from '../Components/ChangePassword/Password'
import Phone from '../Components/ChangePhone/Phone'
import Forward from "../Components/Forward/Forward";

const Main = () => {
  return (
    <MainContents>
      <UserProfile/>
      <Password/>
      <Phone/>
      <Forward/>
    </MainContents>
  );
};

export default Main
