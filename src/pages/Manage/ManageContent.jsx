import styled from "styled-components";
import { useState } from "react";
import BlurLayer from "../../components/Layout/BlurLayer";
import FlavorList from "../../components/UI/Manage/FlavorList";
import RefillContentModal from "../../components/UI/Manage/Modals/RefillContentModal";
import RefillCompleteModal from "../../components/UI/Manage/Modals/RefillCompleteModal";
import ChangeFlavorBtn from "../../components/UI/Manage/Buttons/ChangeFlavorBtn";
import ChangeFlavorModal from "../../components/UI/Manage/Modals/ChangeFlavorModal";
import ChangeCompleteModal from "../../components/UI/Manage/Modals/ChangeCompleteModal";
import FillFlavorModal from "../../components/UI/Manage/Modals/FillFlavorModal";
import FillCompleteModal from "../../components/UI/Manage/Modals/FillCompleteModal";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 990px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChangeBtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CompleteModalWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 35%;
  z-index: 10;
`;
const ManageContent = () => {
  const [isRefillModalOpen, setIsRefillModalOpen] = useState(false);
  const [isFillModalOpen, setIsFillModalOpen] = useState(false);
  const [isFillCompleteModalOpen, setIsFillCompleteModalOpen] = useState(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [isRefillCompleteOpen, setIsRefillCompleteOpen] = useState(false);
  const [isChangeCompleteOpen, setIsChangeCompleteOpen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const handleChangeBtn = () => {
    setIsChangeModalOpen(true);
    setIsChangeCompleteOpen(false);
  };

  const handleChangeComplete = () => {
    setIsChangeModalOpen(false);
    setIsChangeCompleteOpen(true);
  };

  const openModalWithFlavor = (flavor) => {
    setSelectedFlavor(flavor);
    setIsRefillModalOpen(true);
  };

  const openRefillModalWithFlavor = (flavor) => {
    setSelectedFlavor(flavor);
    setIsFillModalOpen(true);
  };

  const handleFillComplete = () => {
    setIsFillModalOpen(false);
    setIsFillCompleteModalOpen(true);
  };

  const handleRefillComplete = () => {
    setIsRefillModalOpen(false);
    setIsRefillCompleteOpen(true);
  };

  return (
    <ContentWrapper>
      <HeaderWrapper>
        <TextWrapper>
          <Title>센트오브사운드 1호기</Title>
          <DeviceId>3748B5</DeviceId>
        </TextWrapper>
        <ChangeBtnWrapper onClick={handleChangeBtn}>
          <ChangeFlavorBtn />
        </ChangeBtnWrapper>
      </HeaderWrapper>
      <FlavorList
        openModalWithFlavor={openModalWithFlavor}
        openRefillModalWithFlavor={openRefillModalWithFlavor}
      />

      {isFillModalOpen && (
        <ModalWrapper>
          <BlurLayer />
          <FillFlavorModal
            flavor={selectedFlavor}
            onClose={() => setIsFillModalOpen(false)}
            onComplete={handleFillComplete}
          />
        </ModalWrapper>
      )}

      {isFillCompleteModalOpen && (
        <CompleteModalWrapper>
          <BlurLayer />
          <FillCompleteModal
            onClose={() => setIsFillCompleteModalOpen(false)}
          />
        </CompleteModalWrapper>
      )}

      {isChangeModalOpen && (
        <ModalWrapper>
          <BlurLayer />
          <ChangeFlavorModal
            onClose={() => setIsChangeModalOpen(false)}
            onChangeComplete={handleChangeComplete}
          />
        </ModalWrapper>
      )}

      {isChangeCompleteOpen && (
        <CompleteModalWrapper>
          <BlurLayer />
          <ChangeCompleteModal onClose={() => setIsChangeCompleteOpen(false)} />
        </CompleteModalWrapper>
      )}

      {isRefillModalOpen && (
        <ModalWrapper>
          <BlurLayer />
          <RefillContentModal
            flavor={selectedFlavor}
            onClose={() => setIsRefillModalOpen(false)}
            onComplete={handleRefillComplete}
          />
        </ModalWrapper>
      )}

      {isRefillCompleteOpen && (
        <CompleteModalWrapper>
          <BlurLayer />
          <RefillCompleteModal
            beforeAmount={selectedFlavor.rest}
            afterAmount={200}
            flavorName={selectedFlavor.name}
            onClose={() => setIsRefillCompleteOpen(false)}
          />
        </CompleteModalWrapper>
      )}
    </ContentWrapper>
  );
};

export default ManageContent;
