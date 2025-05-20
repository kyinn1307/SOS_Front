import styled, { keyframes } from "styled-components";
import { recoCardImageMap } from "../../../constants/recoCardImageMap";
import { mockRecoCardInfoList } from "../../../constants/mockRecoCardInfoList";

const dramaticFlyIn = keyframes`
  0% {
    transform: perspective(1200px) rotateY(270deg) scale(0.4) translateZ(-300px);
    opacity: 0;
  }
  60% {
    transform: perspective(1200px) rotateY(15deg) scale(1.05) translateZ(30px);
    opacity: 1;
  }
  80% {
    transform: perspective(1200px) rotateY(-5deg) scale(1.02) translateZ(10px);
  }
  100% {
    transform: perspective(1200px) rotateY(0deg) scale(1) translateZ(0);
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 316px;
  margin-top: 25px;
  padding: 15px 15px 12px 15px;
  background: #fafaf8;

  box-shadow: 0px 0px 10px rgba(231, 221, 193, 0.5);
  border-radius: 15px;

  animation: ${dramaticFlyIn} 1.3s ease-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 286px;
  border-bottom: 0.5px solid #d3d3d3;
`;

const PhotoWrapper = styled.div`
  margin-top: 3px;

  width: 286px;
  height: 270px;

  background: #e3e3e3;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 15px;
  margin-bottom: 17px;
  align-items: center;
`;

const Title = styled.div`
  height: 40px;

  font-weight: 700;
  font-size: 22px;
  line-height: 180%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #2c2c2c;
`;

const Content = styled.div`
  height: 52px;

  font-size: 15px;
  font-weight: 400;
  line-height: 170%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #2c2c2c;
`;

const Footer = styled.div`
  width: 258px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 8px;
`;

const FooterContent = styled.div`
  font-size: 10px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;

  color: #aaaaaa;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
`;

const OriginalRecoCard = ({ recipeInfo }) => {
  const resolvedImageUrl = recoCardImageMap[recipeInfo.name];

  // ✅ name을 기준으로 mockFragranceInfoList에서 description 추출
  const matchedFragrance = mockRecoCardInfoList[recipeInfo.name];
  const description = matchedFragrance?.description || "설명 없음";

  return (
    <Container>
      <Main>
        <PhotoWrapper>
          <img
            src={resolvedImageUrl}
            alt="추천 레시피 이미지"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </PhotoWrapper>
        <TextWrapper>
          <Title>{recipeInfo.name}</Title>
          <Content>{description}</Content>
        </TextWrapper>
      </Main>
      <Footer>
        {recipeInfo.hashtags?.map((tag, idx) => (
          <FooterContent key={idx}>#{tag}</FooterContent>
        ))}
      </Footer>
    </Container>
  );
};

export default OriginalRecoCard;
