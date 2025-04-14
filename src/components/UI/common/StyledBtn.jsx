import styled from "styled-components";
import Button from "./Button";

export const StyledBtn = styled(Button)`
  position: relative;
  padding: 17px 0;
  width: ${({ isAdmin, isModal }) =>
    isModal ? "170px" : !isAdmin ? "268px" : "230px"};
  height: ${({ isAdmin, isModal }) =>
    isModal ? "40px" : !isAdmin ? "64px" : "52px"};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 44px;
  font-size: ${({ isModal }) => (isModal ? "18px" : "20px")};

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
