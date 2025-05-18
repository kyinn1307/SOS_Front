import { useQuery } from "@tanstack/react-query";
import { fetchFragranceCategories } from "../../../api/apis/fragrance";
import styled from "styled-components";
import FragranceCard from "./FragranceCard";
import { useEffect } from "react";
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

const FragranceList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["fragranceCategories"],
    queryFn: fetchFragranceCategories,
  });

  useEffect(() => {
    if (data) {
      console.log("[FragranceList] 받은 데이터:", data.data?.data);
    }
  }, [data]);

  const fragranceList = Array.isArray(data?.data?.data) ? data.data.data : [];

  if (isLoading) return <div>로딩 중...</div>;
  if (error || fragranceList.length === 0) {
    return <div>데이터를 불러오는 데 실패했습니다.</div>;
  }

  return (
    <CardContainer>
      {/* {FragranceMockData.map((item, index) => ( */}
      {fragranceList.map((item, index) => (
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
