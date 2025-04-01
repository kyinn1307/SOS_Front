import styled from "styled-components";
import Button from "./Button";

export const StyledBtn = styled(Button)`
  position: relative;
  padding: 17px 0;
  width: 268px;
  height: 64px;

  border-radius: 44px;
  font-size: 20px;
  ${({ variant }) =>
    variant === "black" &&
    `
    background-color: #000;
    color: #fff;
    border: none;
  `}
  ${({ variant }) =>
    variant === "white" &&
    `
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  `}

   &:disabled {
    background-color: #ccc;
    color: #fafaf8;
    cursor: not-allowed;
  }
`;
