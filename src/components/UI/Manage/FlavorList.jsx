import styled from "styled-components";
import FlavorItem from "./FlavorItem";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 990px;
  height: 540px;
  gap: 10px;
  padding: 0 25px;
  margin-top: 15px;

  background: #fafaf8;
  box-shadow: 0px 0px 10px rgba(151, 214, 221, 0.4);
  border-radius: 10px;
`;

const flavors = [
  { name: "배롱나무", rest: 8, total: 200 },
  { name: "감나무", rest: 200, total: 200 },
  { name: "경포대", rest: 127, total: 200 },
  { name: "은행나무", rest: 3, total: 200 },
  { name: "차수국", rest: 0, total: 200 },
  { name: "태백산맥", rest: 123, total: 200 },
  { name: "밤장미", rest: 145, total: 200 },
  { name: "벚꽃", rest: 123, total: 200 },
  { name: "안목해변", rest: 123, total: 200 },
  { name: "소나무", rest: 123, total: 200 },
];
const FlavorList = ({ openModalWithFlavor }) => {
  return (
    <Container>
      {flavors.map((flavor, index) => (
        <FlavorItem
          key={index}
          flavor={flavor}
          openModalWithFlavor={openModalWithFlavor}
        />
      ))}
    </Container>
  );
};

export default FlavorList;
