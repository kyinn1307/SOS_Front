import styled from "styled-components";
import InfoCard from "./InfoCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 885px;
  height: 471px;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;

const MockData = [
  {
    title: "Floral",
    info: "부드럽고 감성적인 향 🌷",
    ex: ["밤장미", "벚꽃", "배롱나무", "차수국"],
    vibe: ["#감미로운", "#설렘", "#로맨틱"],
  },
  {
    title: "Citrus",
    info: "상큼하고 경쾌한 향 🍊",
    ex: ["오렌지", "레몬", "자몽"],
    vibe: ["#상쾌한", "#활기찬", "#리프레싱"],
  },
];

const CardList = () => {
  return (
    <CardContainer>
      {MockData.map((item, index) => (
        <InfoCard
          key={index}
          title={item.title}
          info={item.info}
          ex={item.ex}
          vibe={item.vibe}
        />
      ))}
    </CardContainer>
  );
};

export default CardList;
