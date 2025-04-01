import styled from "styled-components";
import ChoiceList from "../../components/UI/Chatbot/ChoiceList";
import { StyledBtn } from "../../components/UI/common/StyledBtn";
import { useState } from "react";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const IntroText = styled.div`
  margin-top: 6px;
  font-size: 17px;
  line-height: 180%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #2c2c2c;
`;

const IndicateText = styled.div`
  width: 193px;
  height: 27px;

  font-size: 15px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;

  color: #aaaaaa;
`;

const BtnWrapper = styled.div`
  margin-top: 25px;
`;
const ChoiceContent = () => {
  const [isBtnOn, setIsBtnOn] = useState(false);

  return (
    <>
      <ContentWrapper>
        <IntroText>
          🌿 방금 시향한 향 중에서 가장 마음을 사로잡은 향을 골라주세요! 🌿
        </IntroText>
        <IndicateText>최대 2개까지 선택할 수 있어요. :{")"}</IndicateText>
        <ChoiceList />
        <BtnWrapper>
          <StyledBtn variant="black" disabled={!isBtnOn}>
            나만의 향 찾기 {">"}
          </StyledBtn>
        </BtnWrapper>
      </ContentWrapper>
    </>
  );
};
export default ChoiceContent;
