import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  height: 300px;
  background: #ffffff;
  box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
  padding: 30px 20px;
`;

export const MainContents = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  row-gap: 20px;
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
  text-align: left;
  margin: 0;
`;
export const PlainText = styled.p`
  color: grey;
  text-align: left;
  margin: 0;
`;

export const IconContainer = styled.div`
  position: absolute;
  background: white;
  right: 0;
  top: 3;
`;
