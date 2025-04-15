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
    title: "Herbal",
    info: "신선하고 깨끗한 향 🫧",
    ex: ["은행나무"],
    vibe: ["#차분한", "#균형 잡힌"],
  },
  {
    title: "Green",
    info: "자연과 가까운 향 🍃",
    ex: ["은행나무", "경포대", "배롱나무"],
    vibe: ["#깨끗한"],
  },
  {
    title: "Fruity",
    info: "달콤하고 따뜻한 향 🍯",
    ex: ["감나무"],
    vibe: ["#따뜻한", "#편안한"],
  },
  {
    title: "Woody",
    info: "깊고 안정적인 향 🪵",
    ex: ["소나무"],
    vibe: ["#고요한", "#깊은"],
  },
  {
    title: "Citrus",
    info: "상쾌하고 경쾌한 향 🍊",
    ex: ["태백산맥", "경포대", "안목해변"],
    vibe: ["#신선", "#경쾌"],
  },
  {
    title: "Amber",
    info: "따뜻하고 무게감 있는 향 🕯️",
    ex: ["소나무"],
    vibe: ["#안정적", "#깊이 있는"],
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
