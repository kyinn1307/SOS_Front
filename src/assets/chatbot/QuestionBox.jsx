import styled from "styled-components";

const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 347px;
  padding: 20px 24px;
  box-sizing: border-box;
  background-color: #fafaf8;
  border-radius: 16px 16px 16px 0;
  box-shadow: 0 0 15px rgba(231, 221, 193, 0.5);
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.1px;
    left: -12px;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-right: 16px solid #fafaf8;
  }
`;

const QuestionText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;
  background: linear-gradient(90deg, #7ed1dd 0%, #f1b1d6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  white-space: pre-wrap;
  word-break: break-word;
`;

const QuestionBox = ({ children }) => {
  return (
    <QuestionContainer>
      <QuestionText>{children}</QuestionText>
    </QuestionContainer>
  );
};

export default QuestionBox;
