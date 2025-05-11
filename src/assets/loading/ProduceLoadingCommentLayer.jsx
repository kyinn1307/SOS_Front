import produce_loading_blur_text from "./produce_loading_blur_text.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const ProduceLoadingCommentLayer = () => {
  return <StyledImg src={produce_loading_blur_text} alt="로딩 배경" />;
};

export default ProduceLoadingCommentLayer;
