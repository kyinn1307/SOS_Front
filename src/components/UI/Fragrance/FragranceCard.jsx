import styled from "styled-components";

const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  height: 228px;
  background-color: #fafaf8;
  box-shadow: 0px 0px 10px rgba(231, 221, 193, 0.5);
  padding: 15px 10px 8px 10px;
  border-radius: 10px;
  color: #2c2c2c;
`;

const InfoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 184.5px;
  height: 190px;
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
  text-align: center;
  line-height: 17px;
  color: #9c9c9c;
`;

const FragranceArea = styled.div`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;
  height: 135.5px;
`;

const FragranceContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  gap: ${(props) => (props.$count === 4 ? "8px" : "10px")};
`;

const FragranceItem = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #2c2c2c;

  font-family: "Pretendard";
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
`;

const HashTagContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6.5px 2px 0 2px;
  border-top: 1px solid #d3d3d3;

  justify-content: ${(props) =>
    props.$count === 3 ? "space-between" : "space-around"};
`;

const HashTag = styled.span`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
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
          <FragranceContainer $count={fragrances.length}>
            {fragrances.map((item, index) => (
              <FragranceItem key={index}>{item}</FragranceItem>
            ))}
          </FragranceContainer>
        </FragranceArea>
      </InfoContainer>
      <HashTagContainer $count={hashtags.length}>
        {hashtags.map((tag, index) => (
          <HashTag key={index}>{tag}</HashTag>
        ))}
      </HashTagContainer>
    </InfoCardWrapper>
  );
};

export default FragranceCard;
