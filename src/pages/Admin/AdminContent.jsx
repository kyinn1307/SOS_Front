import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledBtn from "../../components/UI/common/StyledBtn";
import { useState } from "react";
import { ROUTES } from "../../constants/routes";
import DeviceList from "../../components/UI/Admin/DeviceList";
import BlurLayer from "../../components/Layout/BlurLayer";
import DeviceDeleteModal from "../../components/UI/Admin/DeviceDeleteModal";
import DeviceEditModal from "../../components/UI/Admin/DeviceEditModal";
import DeviceRegisterModal from "../../components/UI/Admin/DeviceRegisterModal";

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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

const AdminContent = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const navigate = useNavigate();

  const handleSelectDevice = (deviceName) => {
    setSelectedDevice((prev) => (prev === deviceName ? null : deviceName));
  };

  const handleDeleteDevice = (deviceName) => {
    setIsDeleteModalOpen(true);
  };

  const handleRegisterDevice = () => {
    setIsRegisterModalOpen(true);
  };

  const handleEditDevice = (device) => {
    setSelectedDevice(device);
    setIsEditModalOpen(true);
  };

  const handleManageClick = () => {
    if (!selectedDevice) {
      alert("기기를 선택해 주세요.");
    } else {
      navigate(ROUTES.MANAGE);
    }
  };

  return (
    <ContentWrapper>
      <Title>관리할 기기를 선택해 주세요.</Title>
      <DeviceList
        selectedDevice={selectedDevice}
        onSelectDevice={handleSelectDevice}
        onDeleteDevice={handleDeleteDevice}
        onEditDevice={handleEditDevice}
      />
      <BtnContainer>
        <AddBtnContainer>
          <StyledBtn
            variant="white"
            isAdmin={true}
            onClick={handleRegisterDevice}
          >
            기기 추가하기
          </StyledBtn>
          <IndicateText>등록되지 않은 기기를 추가해보세요!</IndicateText>
        </AddBtnContainer>
        <StyledBtn variant="black" isAdmin={true} onClick={handleManageClick}>
          기기 관리하기
        </StyledBtn>
      </BtnContainer>

      {isDeleteModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <DeviceDeleteModal
              deviceName={selectedDevice}
              onClose={() => setIsDeleteModalOpen(false)}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {isRegisterModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <DeviceRegisterModal
              onClose={() => setIsRegisterModalOpen(false)}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {isEditModalOpen && selectedDevice && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <DeviceEditModal
              onClose={() => setIsEditModalOpen(false)}
              device={selectedDevice}
            />
          </ModalContainer>
        </ModalOverlay>
      )}
    </ContentWrapper>
  );
};

export default AdminContent;
