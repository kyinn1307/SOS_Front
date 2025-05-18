import styledd, { styled } from "styled-components";

const Bold = styled.span`
  font-weight: 700;
`;

const BoldText = ({ children }) => {
  return <Bold>{children}</Bold>;
};

export default BoldText;
