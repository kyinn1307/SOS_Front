import { useNavigate } from "react-router-dom";
import StyledBtn from "../../components/UI/common/StyledBtn";
import { useState } from "react";
import { ROUTES } from "../../constants/routes";
import DeviceList from "../../components/UI/Admin/DeviceList";
import BlurLayer from "../../components/Layout/BlurLayer";
import DeviceDeleteModal from "../../components/UI/Admin/DeviceDeleteModal";
import DeviceEditModal from "../../components/UI/Admin/DeviceEditModal";
import DeviceRegisterModal from "../../components/UI/Admin/DeviceRegisterModal";
import {
  ContentWrapper,
  Title,
  AddBtnContainer,
  IndicateText,
  BtnContainer,
  ModalOverlay,
  ModalContainer,
} from "./AdminContent.styles";

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
      navigate(ROUTES.MANAGE.replace(":deviceId", selectedDevice.deviceId));
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
              deviceId={selectedDevice.id}
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
