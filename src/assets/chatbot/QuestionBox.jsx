import styled from "styled-components";

const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  padding: 20px 24px;
  box-sizing: border-box;
  background-color: #fafaf8;
  border-radius: 16px;
  box-shadow: 0 0 15px rgba(231, 221, 193, 0.5);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);

    width: 0;
    height: 0;

    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
    border-right: 20px solid #fafaf8;
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
