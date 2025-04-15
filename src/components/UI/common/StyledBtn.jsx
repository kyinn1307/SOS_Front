import styled from "styled-components";
import Button from "./Button";
import BtnWhiteArrow from "../../../assets/btn_white_arrow";
import BtnBlackArrow from "../../../assets/btn_black_arrow";
import BtnDisabledArrow from "../../../assets/btn_disabled_arrow";

export const StyledBtnWrapper = styled(Button)`
  position: relative;
  width: ${({ width, isAdmin, isModal, isDeleteModal }) =>
    width
      ? width
      : isDeleteModal
      ? "170px"
      : isModal
      ? "185px"
      : !isAdmin
      ? "268px"
      : "230px"};

  height: ${({ isAdmin, isModal, isDeleteModal }) =>
    isDeleteModal ? "40px" : isModal ? "40px" : !isAdmin ? "64px" : "52px"};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;

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
const TextArea = styled.span`
  display: inline-block;
`;

const ArrowWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBtn = ({
  children,
  variant,
  onClick,
  disabled,
  isModal,
  isDeleteModal,
  width,
}) => {
  return (
    <StyledBtnWrapper
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      isModal={isModal}
      width={width}
    >
      <TextArea>{children}</TextArea>
      {!isDeleteModal && (
        <ArrowWrapper>
          {disabled ? (
            <BtnDisabledArrow />
          ) : variant === "black" ? (
            <BtnBlackArrow />
          ) : (
            <BtnWhiteArrow />
          )}
        </ArrowWrapper>
      )}
    </StyledBtnWrapper>
  );
};

export default StyledBtn;
