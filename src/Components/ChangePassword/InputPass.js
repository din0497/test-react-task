import React, { useState } from "react";
import { Input, InputContainer } from "../../Styles/formStyles";
import eye from "../../Assets/shape.png";

const InputPass = React.forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  const handler = () => {
    setToggle(!toggle);
  };

  return (
    <InputContainer>
      <Input
        ref={ref}
        type={toggle ? "password" : "text"}
        placeholder="Eg. your password here"
      />
      <img
        alt="icon"
        src={eye}
        style={{
          position: "absolute",
          right: "10px",
          top: "11px",
          cursor: "pointer",
        }}
        onClick={handler}
      />
    </InputContainer>
  );
});

export default InputPass;
