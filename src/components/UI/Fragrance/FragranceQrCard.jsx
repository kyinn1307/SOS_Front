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
  width: 619px;
  height: 599px;
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
  white-space: pre-wrap;

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

  border: 1px solid #2c2c2c;
  margin-top: 16px;
`;

const Content = styled.div`
  white-space: pre-wrap;

  position: relative;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
  font-weight: 400;
  margin-top: 14px;
`;

const BtnWrapper = styled.div`
  margin-top: 5px;
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
