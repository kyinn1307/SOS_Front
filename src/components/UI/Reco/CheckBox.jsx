import styled from "styled-components";
import CheckedBox from "../../../assets/reco/check_box.png";

const CheckboxContainer = styled.div`
  height: 27px;
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  cursor: pointer;

  font-size: 15px;
  line-height: 180%;
  letter-spacing: -0.011em;
  font-weight: 350;
  color: #aaaaaa;
`;

const StyledCheckBox = styled.input`
  width: 15px;
  height: 15px;
  border: 1px solid #aaaaaa;
  background-color: transparent;
  cursor: pointer;
  appearance: none;
  border-radius: 0;

  &:checked {
    background-image: url(${CheckedBox});
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
  }
`;

const Checkbox = ({ isChecked, setIsChecked, content }) => {
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <CheckboxContainer>
      <StyledCheckBox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {content}
    </CheckboxContainer>
  );
};

export default Checkbox;
