import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  /* width: 40%; */
  gap: 15px;
  list-style-type: none;
  margin-top: 25px;
  margin:auto;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

export const Header = styled.header`
  max-width: 1100px;
  width: 90%;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 35px;
  /* justify-content: left;
  gap:60px; */
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 769px) {
   justify-content:space-between;
   
  }

  animation: nav-load 300ms ease-in;

  @keyframes nav-load {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;

export const Nav = styled.li`
  color: #193325;
  font-size: 1.125rem;
  align-items: center;
  padding: 4px 15px;
  &:hover {
    background-color: #e8edea;
    border-radius: 70px;
  }
`;

export const Brand = styled.div`
  font-size: 1.5rem;
  color: #193325;
  font-weight: 600;
`;

export const DropContainer = styled.div`
  position: absolute;
  z-index: 1;
  background-color: red;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 770px) {
    display: none;
  }
`;
export const DropUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1.5rem;
  background-color: white;
  width: 18rem;
  gap: 30px;
  border-radius: 10px;
  position: fixed;
  right: 20px;
`;
export const DropLi = styled.li`
  list-style-type: none;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  width: 60px;
  &:hover{
   color: rgb(20 184 166);
  }
`;
