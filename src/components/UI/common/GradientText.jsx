import styled from "styled-components";

const StyledText = styled.span`
  background: linear-gradient(90deg, #7ed1dd 0%, #f1b1d6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const GradientText = ({ children }) => {
  return (
    <>
      <StyledText>{children}</StyledText>
    </>
  );
};

export default GradientText;
