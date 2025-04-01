import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: 450px;
  background-color: #fafaf8;
  padding: 15px;
  border-radius: 15px;
`;

const ImageWrapper = styled.div`
  width: 286px;
  height: 270px;
  background-color: #e3e3e3;
  border-radius: 10px;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 22px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
`;

const InfoText = styled.div``;

const Card = () => {
  return (
    <CardWrapper>
      <ImageWrapper />
      <Title>우울한 날</Title>
      <InfoText>
        허브와 민트, 시트러스의 상쾌함이 중심이 되고, 우아한 로즈 향이 기분을
        환기시켜줍니다
      </InfoText>
    </CardWrapper>
  );
};

export default Card;
