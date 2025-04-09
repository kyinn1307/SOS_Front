import styled from "styled-components";
import EditBtn from "../../../assets/admin/EditBtn";
import DeleteBtn from "../../../assets/admin/DeleteBtn";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
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
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  padding: 6px;
`;

const DeviceItem = ({ idx, name, selected, onSelect, onDelete }) => {
  const handleClick = () => onSelect(name);
  return (
    <Container selected={selected} onClick={handleClick}>
      <Index>{idx}</Index>
      <Name>{name}</Name>
      <BtnContainer onClick={(e) => e.stopPropagation()}>
        <EditBtn />
        <DeleteBtn onClick={() => onDelete(name)} />
      </BtnContainer>
    </Container>
  );
};

export default DeviceItem;
