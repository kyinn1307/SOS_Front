import styled from "styled-components";
import { useState } from "react";
import BlurLayer from "../../components/Layout/BlurLayer";
import DeleteModal from "../../components/UI/Admin/DeleteModal";
import FlavorList from "../../components/UI/Manage/FlavorList";
import RefillContentModal from "../../components/UI/Manage/RefillContentModal";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const Title = styled.div`
  position: relative;
  width: 258px;

  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: #2c2c2c;
`;

const DeviceId = styled.div`
  position: relative;

  width: 73px;
  margin-top: 8px;

  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #2c2c2c;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 33%;
  left: 32%;
  z-index: 10;
`;

const ManageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const openModalWithFlavor = (flavor, isAlert) => {
    if (!isAlert) return;
    setSelectedFlavor(flavor);
    setIsModalOpen(true);
  };
  return (
    <ContentWrapper>
      <Title>센트오브사운드 1호기</Title>
      <DeviceId>3748B5</DeviceId>
      <FlavorList openModalWithFlavor={openModalWithFlavor} />

      {isModalOpen && (
        <ModalWrapper>
          <BlurLayer />
          <RefillContentModal
            flavor={selectedFlavor}
            onClose={() => setIsModalOpen(false)}
          />
        </ModalWrapper>
      )}
    </ContentWrapper>
  );
};

export default ManageContent;
