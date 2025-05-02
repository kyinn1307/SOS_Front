import loading_blur_text from "./loading_blur_text.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 644px;
  height: 180px;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 0;
`;

const ProduceLoadingCommentLayer = () => {
  return <StyledImg src={loading_blur_text} alt="로딩 배경" />;
};

export default ProduceLoadingCommentLayer;
