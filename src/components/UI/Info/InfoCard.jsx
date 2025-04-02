import styled from "styled-components";

const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 228px;
  background-color: #fafaf8;
  padding: 15px;
  border-radius: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 184.5px;
  height: 190px;

  border-bottom: 1px solid #d3d3d3;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const Info = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #9c9c9c;
`;

const ExArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin-top: 18px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ExItem = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;

const VibeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 6.5px;
`;

const VibeTag = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #aaaaaa;
`;

const InfoCard = ({ title, info, ex, vibe }) => {
  return (
    <InfoCardWrapper>
      <InfoContainer>
        <TitleArea>
          <Title>{title}</Title>
          <Info>{info}</Info>
        </TitleArea>
        <ExArea>
          {ex.map((item, index) => (
            <ExItem key={index}>{item}</ExItem>
          ))}
        </ExArea>
      </InfoContainer>
      <VibeContainer>
        {vibe.map((tag, index) => (
          <VibeTag key={index}>{tag}</VibeTag>
        ))}
      </VibeContainer>
    </InfoCardWrapper>
  );
};

export default InfoCard;
