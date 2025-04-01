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

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Info = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #9c9c9c;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ExArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

const InfoCard = () => {
  return (
    <InfoCardWrapper>
      <TitleArea>
        <Title>Floral</Title>
        <Info> 부드럽고 감성적인 향 🌷</Info>
      </TitleArea>
      <ExArea>
        <div>밤나무</div>
        <div>밤나무</div>
      </ExArea>
    </InfoCardWrapper>
  );
};

export default InfoCard;
