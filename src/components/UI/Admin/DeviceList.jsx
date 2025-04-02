import styled from "styled-components";
import DeviceItem from "../../Admin/DeviceItem";

const DeviceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 399px;
  display: flex;
  margin-top: 40px;
  padding: 35px 31.15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(151, 214, 221, 0.4);
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #2c2c2c;
`;

const Bar = styled.div`
  width: 590px;
  height: 0px;
  border: 1px solid #d3d3d3;
  margin-top: 13px;
  margin-bottom: 14px;
`;

const DeviceList = () => {
  return (
    <DeviceContainer>
      <Text>내 기기</Text>
      <Bar />
      <DeviceItem idx={"001"} name={"센트오브사운드 1호기 - 3748B5"} />
      <DeviceItem idx={"002"} name={"센트오브사운드 2호기 - 3748B5"} />
      <DeviceItem idx={"003"} name={"센트오브사운드 3호기 - 3748B5"} />
      <DeviceItem idx={"004"} name={"센트오브사운드 4호기 - 3748B5"} />
    </DeviceContainer>
  );
};

export default DeviceList;
