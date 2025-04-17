import { useQuery } from "@tanstack/react-query";
import { fetchFragranceCategories } from "../../../api/apis/fragrance";
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
    name: "Floral",
    description: "부드럽고 감성적인 향 🌷",
    fragrances: ["밤장미", "벚꽃", "배롱나무", "차수국"],
    hashtags: ["#감미로운", "#설렘", "#로맨틱"],
  },
  {
    name: "Herbal",
    description: "신선하고 깨끗한 향 🫧",
    fragrances: ["은행나무"],
    hashtags: ["#차분한", "#균형 잡힌"],
  },
  {
    name: "Green",
    description: "자연과 가까운 향 🍃",
    fragrances: ["은행나무", "경포대", "배롱나무"],
    hashtags: ["#깨끗한"],
  },
  {
    name: "Fruity",
    description: "달콤하고 따뜻한 향 🍯",
    fragrances: ["감나무"],
    hashtags: ["#따뜻한", "#편안한"],
  },
  {
    name: "Woody",
    description: "깊고 안정적인 향 🪵",
    fragrances: ["소나무"],
    hashtags: ["#고요한", "#깊은"],
  },
  {
    name: "Citrus",
    description: "상쾌하고 경쾌한 향 🍊",
    fragrances: ["태백산맥", "경포대", "안목해변"],
    hashtags: ["#신선", "#경쾌"],
  },
  {
    name: "Amber",
    description: "따뜻하고 무게감 있는 향 🕯️",
    fragrances: ["소나무"],
    hashtags: ["#안정적", "#깊이 있는"],
  },
];

const CardList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["fragranceCategories"],
    queryFn: fetchFragranceCategories,
  });

  // if (isLoading) return <div>로딩 중...</div>;
  // if (error) return <div>데이터를 불러오는 중 오류가 발생했어요.</div>;

  return (
    <CardContainer>
      {data.map((item, index) => (
        <InfoCard
          key={index}
          name={item.name}
          description={item.description}
          fragrances={item.fragrances}
          hashtags={item.hashtags}
        />
      ))}
    </CardContainer>
  );
};

export default CardList;
