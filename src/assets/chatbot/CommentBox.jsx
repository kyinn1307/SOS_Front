import styled from "styled-components";

const CommentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 104px;
  margin-bottom: 36px;
  background: #fafaf8;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(231, 221, 193, 0.5);
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    bottom: -17px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 17px 12px 0 12px;
    border-style: solid;
    border-color: rgba(231, 221, 193, 0.5) transparent transparent transparent;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -17px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 17px 12px 0 12px;
    border-style: solid;
    border-color: #fafaf8 transparent transparent transparent;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 170%;
  letter-spacing: -0.011em;
  color: #2c2c2c;
`;

const CommentBox = ({ children }) => {
  return (
    <CommentWrapper>
      <TextContainer>{children}</TextContainer>
    </CommentWrapper>
  );
};

export default CommentBox;
