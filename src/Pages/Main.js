import { MainContents } from "../Styles/mainStyles";
import Content from "../Layouts/Content";
import UserProfile from "../Components/User/UserProfile";

const Main = () => {
  return (
    <MainContents>
      <UserProfile/>
      <Content>Hello world!</Content>
      <Content>Hello world!</Content>
      <Content>Hello world!</Content>
    </MainContents>
  );
};

export default Main
