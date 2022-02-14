import Content from "../../Layouts/Content";
import { useSelector} from "react-redux";
import {
  BoldText,
  IconContainer,
  Img,
  ImgContainer,
  PlainText,
  TextWrapper,
  Wrapper,
} from "../../Styles/mainStyles";
import user from "../../Assets/user.png";
import { AiOutlineEdit } from "react-icons/ai";
import { MdAddAPhoto } from "react-icons/md";

const UserProfile = () => {


  const data = useSelector(state=> state.userInfo)

  return (
    <Content>
      <Wrapper>
        <ImgContainer>
          <Img src={user} />
          <IconContainer>
              <MdAddAPhoto/>
          </IconContainer>
        </ImgContainer>
        <TextWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <BoldText>{`${data.name} ${data.surname}`}</BoldText>
            <AiOutlineEdit color="#1666C5" size={20} />
          </div>

          <PlainText>
            {data.std_code}
            <br />
            Bachelor of science program
          </PlainText>
          <BoldText>{data.faculty_name}</BoldText>
        </TextWrapper>
      </Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        <PlainText>Latest enrolment</PlainText>
        <BoldText>2021/2022 - Full time</BoldText>
        <PlainText>3 enrolment, cohort 2013/2022</PlainText>
        <PlainText>
          Academic progress status:{" "}
          <span style={{ color: "green" }}>ACTIVE</span>
        </PlainText>
      </div>
    </Content>
  );
};

export default UserProfile;
