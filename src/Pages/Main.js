import { useEffect } from "react";
import { MainContents } from "../Styles/mainStyles";
import UserProfile from "../Components/User/UserProfile";
import Password from "../Components/ChangePassword/Password";
import Phone from "../Components/ChangePhone/Phone";
import Forward from "../Components/Forward/Forward";
import { getUser } from "../Redux/reducers/auth";
import { useSelector,useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userinfo);

  useEffect(() => {
    if (!userData) {
      dispatch(getUser());
    }
  }, [userData]);
  return (
    <MainContents>
      <UserProfile />
      <Password />
      <Phone />
      <Forward />
    </MainContents>
  );
};

export default Main;
