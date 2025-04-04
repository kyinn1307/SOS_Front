import styled from "styled-components";
import { StyledBtn } from "../../components/UI/common/StyledBtn";
import { useState } from "react";
import DeviceList from "../../components/UI/Admin/DeviceList";
import BlurLayer from "../../components/Layout/BlurLayer";
import DeleteModal from "../../components/UI/Admin/DeleteModal";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 20px;
  text-align: center;
`;

const Title = styled.div`
  position: relative;
  width: 400px;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #2c2c2c;
  margin-top: 16px;
`;

const AddBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndicateText = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #999999;
  margin-top: 13px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 49px;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 33%;
  left: 32%;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const AdminContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleDeleteClick = (device) => {
    setSelectedDevice(device);
    setIsModalOpen(true);
  };

  return (
    <ContentWrapper>
      <Title>관리할 기기를 선택해 주세요.</Title>
      <DeviceList onDelete={handleDeleteClick} /> {/* ✅ onDelete 전달 */}
      <BtnContainer>
        <AddBtnContainer>
          <StyledBtn variant="white" isAdmin={true}>
            기기 추가하기 {">"}
          </StyledBtn>
          <IndicateText>등록되지 않은 기기를 추가해보세요!</IndicateText>
        </AddBtnContainer>
        <StyledBtn variant="black" isAdmin={true}>
          기기 관리하기 {">"}
        </StyledBtn>
      </BtnContainer>
      {isModalOpen && (
        <ModalWrapper>
          <BlurLayer />
          <DeleteModal
            deviceName={selectedDevice} // ✅ 기기명 전달
            onClose={() => setIsModalOpen(false)}
          />
        </ModalWrapper>
      )}
    </ContentWrapper>
  );
};

export default AdminContent;
