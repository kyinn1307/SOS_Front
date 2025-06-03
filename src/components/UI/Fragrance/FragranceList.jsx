import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchFragranceCategories } from "../../../api/apis/fragrance";
import styled from "styled-components";
import FragranceCard from "./FragranceCard";
import FragranceMockData from "../../../constants/FragranceMockData";

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

// 향료 그룹화 데이터
const FragranceList = () => {
  return (
    <CardContainer>
      {FragranceMockData.map((item, index) => (
        <FragranceCard
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

export default FragranceList;
