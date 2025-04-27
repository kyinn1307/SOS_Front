import { useState, useEffect } from "react";
import styled from "styled-components";
import RefillBtn from "./Buttons/RefillBtn";
import VolumeAlert from "../../../assets/manage/volume_alert";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 85px;
  gap: 10px;
  align-items: center;
  margin-top: 26px;
`;

const FlavorName = styled.div`
  width: 52px;
  height: 18px;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

const VolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 85px;
  height: 365px;

  background: #e9e9e9;
`;

const Ongoing = styled.div`
  width: 100%;
  height: ${({ rest }) => `${rest}%`};
  background-color: #a2ced5;
`;

const VolumeText = styled.div`
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  color: ${({ isEmpty }) => (isEmpty ? "#FF4D4D" : "#000000")};
  text-align: center;
`;

const AlertWrapper = styled.div`
  position: relative;
  width: 38px;
  height: 45px;
`;

const CartridgeItem = ({
  cartridge,
  openModalWithFlavor,
  openRefillModalWithFlavor,
}) => {
  const [rest, setRest] = useState(cartridge.currentAmount);
  const [isAlert, setIsAlert] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [neverFilled, setNeverFilled] = useState(
    rest === null || rest === undefined
  );

  const handleClick = () => {
    if (neverFilled) {
      openRefillModalWithFlavor(cartridge);
    } else {
      openModalWithFlavor(cartridge);
    }
  };

  useEffect(() => {
    setIsAlert(rest <= 50 && !neverFilled);
    setIsEmpty(rest === 0 && !neverFilled);
  }, [rest, neverFilled]);

  return (
    <Container>
      <AlertWrapper>{isAlert && <VolumeAlert />}</AlertWrapper>
      <FlavorName>{cartridge.fragranceName}</FlavorName>
      <VolumeContainer>
        <Ongoing rest={(rest / cartridge.totalCapacity) * 100}></Ongoing>
      </VolumeContainer>
      {neverFilled ? (
        <VolumeText>0/0(ml)</VolumeText>
      ) : (
        <VolumeText isEmpty={isEmpty}>
          {cartridge.currentAmount}/{cartridge.totalCapacity}(ml)
        </VolumeText>
      )}
      <RefillBtn
        neverFilled={neverFilled}
        isAlert={isAlert}
        onClick={handleClick}
      />
    </Container>
  );
};

export default CartridgeItem;
