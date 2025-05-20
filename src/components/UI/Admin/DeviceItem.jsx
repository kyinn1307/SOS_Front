import styled from "styled-components";
import EditBtn from "../../../assets/admin/EditBtn";
import DeleteBtn from "../../../assets/admin/DeleteBtn";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#ECF3F2" : "transparent")};
`;

const Index = styled.div`
  width: 50px;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  text-align: left;
  letter-spacing: 0.01em;
  color: #d3d3d3;
  padding: 2px 4px;
`;

const Name = styled.div`
  width: 465px;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  font-weight: 400;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  padding: 6px;
`;

const DeviceItem = ({
  index,
  deviceId,
  deviceName,
  devicePhysicalId,
  selected,
  onSelect,
  onEdit,
  onDelete,
}) => {
  const handleClick = () => {
    onSelect({ deviceId, deviceName, devicePhysicalId });
  };

  const formattedIndex = String(index + 1).padStart(3, "0");
  return (
    <Container selected={selected} onClick={handleClick}>
      <Index>{formattedIndex}</Index>
      <Name>
        센트오브사운드 {deviceName} - {devicePhysicalId}
      </Name>
      <BtnContainer onClick={(e) => e.stopPropagation()}>
        <EditBtn onClick={onEdit} />
        <DeleteBtn onClick={() => onDelete({ deviceId, deviceName })} />
      </BtnContainer>
    </Container>
  );
};

export default DeviceItem;
