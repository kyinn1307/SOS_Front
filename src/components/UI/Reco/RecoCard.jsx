import styled, { keyframes } from "styled-components";

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
  height: 450px;
  margin-top: 25px;
  padding: 12px 15px;
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

const PhotoWrapper = styled.img`
  margin-top: 3px;

  width: 286px;
  height: 270px;

  background: #e3e3e3;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  margin-top: 15px;
  margin-bottom: 17px;
  align-items: center;
`;

const Title = styled.div`
  width: 99px;
  height: 40px;

  font-weight: 700;
  font-size: 22px;
  line-height: 180%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #2c2c2c;
`;

const Content = styled.div`
  width: 185px;
  height: 52px;

  font-size: 15px;
  line-height: 170%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #2c2c2c;
`;

const Footer = styled.div`
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 8px;
`;

const FooterContent = styled.div`
  font-size: 10px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;

  color: #aaaaaa;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const RecoCard = () => {
  return (
    <Container>
      <Main>
        <PhotoWrapper />
        <TextWrapper>
          <Title>데이트 전날</Title>
          <Content>
            프루티, 민트, 플로럴이 어우러져
            <br />
            기분 좋은 설렘을 전달합니다.
          </Content>
        </TextWrapper>
      </Main>
      <Footer>
        <FooterContent>Top : 안목해변</FooterContent>
        <FooterContent>Middle : 감나무, 벚꽃</FooterContent>
        <FooterContent>Base : 차수국</FooterContent>
      </Footer>
    </Container>
  );
};

export default RecoCard;
