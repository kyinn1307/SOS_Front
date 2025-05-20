import { useNavigate } from "react-router-dom";
import { useDeviceStore } from "../../store/deviceStore";
import StyledBtn from "../../components/UI/common/StyledBtn";
import { useState } from "react";
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
import BoldText from "../../components/UI/common/BoldText";

const AdminContent = () => {
  const { setDeviceId } = useDeviceStore();

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const navigate = useNavigate();

  const handleSelectDevice = (device) => {
    setSelectedDevice((prev) =>
      prev?.deviceId === device.deviceId ? null : device
    );
  };

  const handleDeleteDevice = ({ deviceId, deviceName }) => {
    setIsDeleteModalOpen(true);
    setSelectedDevice({ deviceId, deviceName });
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
      console.log("선택한 device", selectedDevice);
      navigate(`/manage/${selectedDevice.deviceId}`);
    }
  };

  return (
    <ContentWrapper>
      <Title>
        <BoldText>관리할</BoldText> 기기를 선택해 주세요.
      </Title>
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
            paddingLeft={"53.93px"}
          >
            기기 추가하기
          </StyledBtn>
          <IndicateText>등록되지 않은 기기를 추가해보세요!</IndicateText>
        </AddBtnContainer>
        <StyledBtn
          variant="black"
          isAdmin={true}
          onClick={handleManageClick}
          paddingLeft={"53.93px"}
        >
          기기 관리하기
        </StyledBtn>
      </BtnContainer>

      {isDeleteModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <DeviceDeleteModal
              deviceId={selectedDevice.deviceId}
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
