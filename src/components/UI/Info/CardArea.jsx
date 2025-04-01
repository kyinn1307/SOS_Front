import styled from "styled-components";
import InfoCard from "./InfoCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 885px;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;
const CardArea = () => {
  1;
  return (
    <CardContainer>
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </CardContainer>
  );
};

export default CardArea;
