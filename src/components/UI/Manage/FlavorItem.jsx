import { useState, useEffect } from "react";
import styled from "styled-components";
import RefillBtn from "./RefillBtn";
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

const FlavorItem = ({ flavor, openModalWithFlavor }) => {
  const [rest, setRest] = useState(flavor.rest);
  const [isAlert, setIsAlert] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsAlert(rest <= 10);
    setIsEmpty(rest === 0);
  }, [rest]);

  return (
    <Container>
      <AlertWrapper>{isAlert && <VolumeAlert />}</AlertWrapper>
      <FlavorName>{flavor.name}</FlavorName>
      <VolumeContainer>
        <Ongoing rest={rest / 2}></Ongoing>
      </VolumeContainer>
      <VolumeText isEmpty={isEmpty}>
        {rest}/{flavor.total}(ml)
      </VolumeText>
      <RefillBtn
        isAlert={isAlert}
        onClick={() => openModalWithFlavor(flavor)}
      />
    </Container>
  );
};

export default FlavorItem;
