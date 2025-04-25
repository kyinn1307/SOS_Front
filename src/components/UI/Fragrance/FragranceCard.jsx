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

const NameArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Name = styled.div`
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

const FragranceArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin-top: 18px;
  align-items: center;
  justify-content: space-evenly;
`;

const FragranceItem = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;

const HashTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 6.5px;
`;

const HashTag = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #aaaaaa;
`;

const FragranceCard = ({ name, description, fragrances, hashtags }) => {
  return (
    <InfoCardWrapper>
      <InfoContainer>
        <NameArea>
          <Name>{name}</Name>
          <Info>{description}</Info>
        </NameArea>
        <FragranceArea>
          {fragrances.map((item, index) => (
            <FragranceItem key={index}>{item}</FragranceItem>
          ))}
        </FragranceArea>
      </InfoContainer>
      <HashTagContainer>
        {hashtags.map((tag, index) => (
          <HashTag key={index}>{tag}</HashTag>
        ))}
      </HashTagContainer>
    </InfoCardWrapper>
  );
};

export default FragranceCard;
