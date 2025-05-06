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
    background-color: #2C2C2C;
    color: #FAFAF8;
    border: none;
  `}
  ${({ variant }) =>
    variant === "white" &&
    `
    background-color: #FAFAF8;
    color: #2C2C2C;
    border: 1.4px solid #2c2c2c;
  `}

  &:disabled {
    background-color: #d3d3d3;
    color: #fafaf8;
    cursor: not-allowed;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Text = styled.span`
  display: inline-block;
  font-weight: ${({ isAdmin }) => (isAdmin ? 400 : 350)};

  font-family: "Pretendard";
  font-style: normal;
  font-size: ${({ isChangeModal, isModal }) =>
    isChangeModal ? "18px" : isModal ? "16px" : "20px"};
  line-height: 150%;
  letter-spacing: -0.011em;
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
  isAdmin,
  isDeleteModal,
  width,
  isChangeModal,
}) => {
  return (
    <StyledBtnWrapper
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      isModal={isModal}
      width={width}
      isAdmin={isAdmin}
      isChangeModal={isChangeModal}
    >
      <TextArea>
        <Text isAdmin={isAdmin} isModal={isModal} isChangeModal={isChangeModal}>
          {children}
        </Text>

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
      </TextArea>
    </StyledBtnWrapper>
  );
};

export default StyledBtn;
