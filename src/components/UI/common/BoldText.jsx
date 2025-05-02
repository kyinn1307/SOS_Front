import styledd, { styled } from "styled-components";

const Bold = styled.span`
  font-weight: 600;
`;

const BoldText = ({ children }) => {
  return <Bold>{children}</Bold>;
};

export default BoldText;
