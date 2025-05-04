import loading_blur from "./loading_blur_text.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const LoadingCommentLayer = () => {
  return <StyledImg src={loading_blur} alt="로딩 배경" />;
};

export default LoadingCommentLayer;
