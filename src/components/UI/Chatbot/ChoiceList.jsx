import styled from "styled-components";
import ChoiceItem from "./ChoiceItem";

const MockData = [
  "배롱나무",
  "태백산맥",
  "감나무",
  "밤장미",
  "경포대",
  "벚꽃",
  "은행나무",
  "안목해변",
  "차수국",
  "소나무",
];
const ItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  flex-wrap: wrap;
  width: 760px;

  margin-top: 30px;
`;

const ChoiceList = () => {
  return (
    <ItemContainer>
      {MockData.map((title, index) => (
        <ChoiceItem key={index} title={title} />
      ))}
    </ItemContainer>
  );
};

export default ChoiceList;
