import styled from "styled-components";

export const MainContents = styled.main`
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  row-gap: 20px;
  @media only screen and (max-width: 900px) {
    grid-template-columns: auto;
  }
`;

export const Container = styled.div`
  width: 450px;
  height: 320px;
  background: #ffffff;
  box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
  padding: 30px 20px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const ImgContainer = styled.div`
  width: 100px;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 7px;
`;

export const BoldText = styled.h4`
  text-align: ${(props) => (props.tpe ? "center" : "left")};
  margin: 0;
  margin-bottom: ${(props) => props.bottom && props.bottom};
`;
export const PlainText = styled.p`
  color: grey;
  text-align: ${(props) => (props.tpe ? "center" : "left")};
  margin: 0;
`;

export const FootText = styled.p`
  color: grey;
  text-align: "left";
  margin: 0;
  font-size: 15px;
  position: absolute;
  bottom: 25px;
  left: ${props => props.isTrue? '28px' : '70px'};
`;

export const IconContainer = styled.div`
  position: absolute;
  background: #ffffff;
  bottom: 3px;
  right: 0;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
