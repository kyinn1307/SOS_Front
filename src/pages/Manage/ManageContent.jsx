import styled from "styled-components";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCartridges } from "../../api/apis/cartridge";
import BlurLayer from "../../components/Layout/BlurLayer";
import FlavorList from "../../components/UI/Manage/FlavorList";
import RefillContentModal from "../../components/UI/Manage/Modals/RefillContentModal";
import RefillCompleteModal from "../../components/UI/Manage/Modals/RefillCompleteModal";
import ChangeFlavorBtn from "../../components/UI/Manage/Buttons/ChangeFlavorBtn";
import ChangeFlavorModal from "../../components/UI/Manage/Modals/ChangeFlavorModal";
import ChangeCompleteModal from "../../components/UI/Manage/Modals/ChangeCompleteModal";
import FillFlavorModal from "../../components/UI/Manage/Modals/FillFlavorModal";
import FillCompleteModal from "../../components/UI/Manage/Modals/FillCompleteModal";
import ScrollBtn from "../../assets/scroll_btn";
import DeviceChoice from "../../components/UI/Manage/DeviceChoice";

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

const BtnWrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 333.81px;
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
const mockCartridge = [
  { fragranceName: "배롱나무", currentAmount: 8, totalCapacity: 200 },
  { fragranceName: "감나무", currentAmount: 200, totalCapacity: 200 },
  { fragranceName: "경포대", currentAmount: 0, totalCapacity: 200 },
  { fragranceName: "은행나무", currentAmount: 3, totalCapacity: 200 },
  { fragranceName: "차수국", currentAmount: 0, totalCapacity: 200 },
  { fragranceName: "태백산맥", currentAmount: 123, totalCapacity: 200 },
  { fragranceName: "밤장미", currentAmount: 145, totalCapacity: 200 },
  { fragranceName: "벚꽃", currentAmount: 123, totalCapacity: 200 },
  { fragranceName: "안목해변", currentAmount: 123, totalCapacity: 200 },
  { fragranceName: "소나무", currentAmount: 123, totalCapacity: 200 },
];

const ManageContent = ({ deviceId }) => {
  const [showDeviceChoice, setShowDeviceChoice] = useState(false);
  // modal 상태 관리
  const [isRefillModalOpen, setIsRefillModalOpen] = useState(false);
  const [isRefillCompleteOpen, setIsRefillCompleteOpen] = useState(false);
  const [isFillModalOpen, setIsFillModalOpen] = useState(false);
  const [isFillCompleteModalOpen, setIsFillCompleteModalOpen] = useState(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [isChangeCompleteOpen, setIsChangeCompleteOpen] = useState(false);
  // 선택된 catridge 상태 관리
  const [selectedCatridge, setSelectedCatridge] = useState(null);
  // complete modal 전달 props
  const [refillResult, setRefillResult] = useState({
    beforeAmount: 0,
    afterAmount: 0,
  });

  const handleScrollBtnClick = () => {
    setShowDeviceChoice((prev) => !prev);
  };

  const handleChangeBtn = () => {
    setIsChangeModalOpen(true);
    setIsChangeCompleteOpen(false);
  };

  const handleChangeComplete = () => {
    setIsChangeModalOpen(false);
    setIsChangeCompleteOpen(true);
  };

  const openModalWithFlavor = (flavor) => {
    setSelectedCatridge(flavor);
    setIsRefillModalOpen(true);
  };

  const openRefillModalWithFlavor = (flavor) => {
    setSelectedCatridge(flavor);
    setIsFillModalOpen(true);
  };

  const handleFillComplete = () => {
    setIsFillModalOpen(false);
    setIsFillCompleteModalOpen(true);
  };

  const handleRefillComplete = ({ beforeAmount, afterAmount }) => {
    setIsRefillModalOpen(false);
    setRefillResult({ beforeAmount, afterAmount });
    setIsRefillCompleteOpen(true);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["cartridges", deviceId],
    queryFn: () => getCartridges(deviceId),
    enabled: !!deviceId,
  });

  const deviceName =
    !error && data?.data?.device?.deviceName
      ? data.data.device.deviceName
      : "센트오브사운드 1호기";

  if (isLoading) return <div>로딩 중...</div>;

  const cartridgeList =
    !error && data ? data.data?.cartridgeDetails : mockCartridge;

  return (
    <ContentWrapper>
      <HeaderWrapper>
        <TextWrapper>
          <Title>{deviceName}</Title>
          <BtnWrapper>
            <ScrollBtn onClick={handleScrollBtnClick} />
          </BtnWrapper>
          <DeviceId>{deviceId}</DeviceId>
        </TextWrapper>
        <ChangeBtnWrapper onClick={handleChangeBtn}>
          <ChangeFlavorBtn />
        </ChangeBtnWrapper>
      </HeaderWrapper>
      <FlavorList
        deviceId={deviceId}
        cartridgeList={cartridgeList}
        openModalWithFlavor={openModalWithFlavor}
        openRefillModalWithFlavor={openRefillModalWithFlavor}
      />

      {showDeviceChoice && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <DeviceChoice onClose={() => setShowDeviceChoice(false)} />
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* 초기 카트리지 채우기 (api x) */}
      {isFillModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <FillFlavorModal
              catridgeName={selectedCatridge.name}
              onClose={() => setIsFillModalOpen(false)}
              onComplete={handleFillComplete}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {isFillCompleteModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <FillCompleteModal
              onClose={() => setIsFillCompleteModalOpen(false)}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* 카트리지 교체 */}
      {isChangeModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <ChangeFlavorModal
              onClose={() => setIsChangeModalOpen(false)}
              onChangeComplete={handleChangeComplete}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {isChangeCompleteOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <ChangeCompleteModal
              onClose={() => setIsChangeCompleteOpen(false)}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* 카트리지 용액 리필 */}
      {isRefillModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <RefillContentModal
              catridge={selectedCatridge}
              onClose={() => setIsRefillModalOpen(false)}
              onComplete={handleRefillComplete}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {isRefillCompleteOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <RefillCompleteModal
              beforeAmount={refillResult.beforeAmount}
              afterAmount={refillResult.afterAmount}
              catridgeName={selectedCatridge.fragranceName}
              onClose={() => setIsRefillCompleteOpen(false)}
            />
          </ModalContainer>
        </ModalOverlay>
      )}
    </ContentWrapper>
  );
};

export default ManageContent;
