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

const ChoiceList = ({ selectedItems, setSelectedItems }) => {
  const handleItemClick = (title) => {
    setSelectedItems((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      } else if (prev.length < 2) {
        return [...prev, title];
      }
      return prev;
    });
  };

  return (
    <ItemContainer>
      {MockData.map((title, index) => (
        <ChoiceItem
          key={index}
          title={title}
          isSelected={selectedItems.includes(title)}
          onClick={handleItemClick}
          disabled={selectedItems.length >= 2 && !selectedItems.includes(title)}
        />
      ))}
    </ItemContainer>
  );
};

export default ChoiceList;
