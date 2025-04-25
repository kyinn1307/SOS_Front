import styled from "styled-components";
import CloseBtn from "../../../assets/close_btn";
import { fragranceImagesMap } from "../../../constants/fragranceImageMap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 619px;
  padding: 20px;
  border-radius: 15px;
  background-color: #fafaf8;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 579px;
  height: 327px;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled.div`
  position: relative;
  height: 38px;
  font-weight: 700;
  font-size: 25px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 18px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
`;

const Separator = styled.div`
  position: relative;
  width: 12px;
  height: 0px;

  border: 2px solid #2c2c2c;
  margin-top: 16px;
`;

const Content = styled.div`
  position: relative;
  width: 474px;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
  margin-top: 14px;
`;

const BtnWrapper = styled.div`
  margin-top: 15px;
`;

const FragranceQrCard = ({ onClose }) => {
  return (
    <Container>
      <CardWrapper>
        <ImageWrapper>
          <img
            src={fragranceImagesMap.anmokBeach}
            alt="배롱나무"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ImageWrapper>
        <Title>배롱나무</Title>
        <SubTitle>맑은 이슬을 머금은 배롱나무 생화 꽃 향기</SubTitle>
        <Separator />
        <Content>
          초여름의 장맛비 속, 우산 너머로 배롱나무 꽃잎들이 쏟아질 듯 피어
          있습니다.
          <br />
          굵은 빗방울이 꽃잎을 스치며 공기 속으로 번지는 건, <br />
          촉촉하고 생생한 꽃 내음. 빗속에서도 환하게 피어 있는 그 향은, <br />
          유난히 푸르고 투명한 감정으로 다가옵니다.
        </Content>
      </CardWrapper>
      <BtnWrapper onClick={onClose}>
        <CloseBtn />
      </BtnWrapper>
    </Container>
  );
};

export default FragranceQrCard;
