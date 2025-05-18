import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  width: 372px;
  height: 44px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  padding: 12px 20px;
  border: 1px solid #2c2c2c;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #d3d3d3;
    font-size: 17px;
  }
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <InputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
