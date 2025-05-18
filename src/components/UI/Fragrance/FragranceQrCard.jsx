import styled from "styled-components";
import CloseBtn from "../../../assets/close_btn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 599px;
  height: 619px;
  padding: 20px;
  border-radius: 15px;
  background-color: #fafaf8;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
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
  white-space: pre-wrap; /* 줄바꿈 처리 핵심 */

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

const FragranceQrCard = ({ fragranceInfo, onClose }) => {
  return (
    <Container>
      <CardWrapper>
        <ImageWrapper>
          <img
            src={fragranceInfo.imageUrl}
            alt={fragranceInfo.realName}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ImageWrapper>
        <Title>{fragranceInfo.name}</Title>
        <SubTitle>{fragranceInfo.realName}</SubTitle>
        <Separator />
        <Content>{fragranceInfo.description}</Content>
      </CardWrapper>
      <BtnWrapper onClick={onClose}>
        <CloseBtn />
      </BtnWrapper>
    </Container>
  );
};

export default FragranceQrCard;
