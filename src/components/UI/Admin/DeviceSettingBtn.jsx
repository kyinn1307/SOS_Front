import styled from "styled-components";

const Button = styled.button`
  width: 185px;
  height: 40px;

  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.011em;

  border-radius: 37.64px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#D3D3D3" : "#2c2c2c")};
  color: #fafaf8;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const DeviceSettingBtn = ({ text, disabled }) => {
  return <Button disabled={disabled}>{text}</Button>;
};

export default DeviceSettingBtn;
