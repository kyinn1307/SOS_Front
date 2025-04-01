import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 15px 10px 15px;
  width: 350px;
  height: 84px;

  background: #fafaf8;
  box-shadow: 0px 0px 10px rgba(231, 221, 193, 0.5);
  border-radius: 15px;
  font-size: 20px;
`;

const ChoiceItem = ({ title }) => {
  return <ItemWrapper>{title}</ItemWrapper>;
};

export default ChoiceItem;
