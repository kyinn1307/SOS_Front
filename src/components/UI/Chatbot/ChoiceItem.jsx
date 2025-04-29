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
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: all 0.2s;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.selected
      ? "0px 0px 10px #97d6dd"
      : "0px 0px 10px rgba(231, 221, 193, 0.5);"};

  font-size: 20px;

  &:hover {
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0px 0px 10px #97d6dd"};
  }
`;

const ChoiceItem = ({ title, isSelected, onClick, disabled }) => {
  return (
    <ItemWrapper
      selected={isSelected}
      disabled={disabled}
      onClick={() => !disabled && onClick(title)}
    >
      {title}
    </ItemWrapper>
  );
};

export default ChoiceItem;
