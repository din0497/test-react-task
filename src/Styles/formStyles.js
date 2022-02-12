import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  outline: none;
  border: 1.06532px solid #cfd0d7;
  padding: 10px 5px;
  width: 300px;
  margin-left: ${(props) => props.isTrue && "-150px"};
`;

export const Label = styled.label`
  color: grey;
  text-align: "left";
  margin: 0;
  margin-bottom: 5px;
  width: ${(props) => props.isTrue && "220px"};
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isTrue ? "row" : "column")};
  align-items: start;
  width: 312px;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.margin && props.margin};
`;

export const Button = styled.button`
  background: #262628;
  color: white;
  border: none;
  outline: none;
  padding: 5px 50px;
  margin-top: 15px;
  cursor: pointer;
`;
