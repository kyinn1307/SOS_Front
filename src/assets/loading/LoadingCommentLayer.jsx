import loading_blur from "./loading_blur.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 644px;
  height: 180px;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 0;
`;

const LoadingCommentLayer = () => {
  return <StyledImg src={loading_blur} alt="로딩 배경" />;
};

export default LoadingCommentLayer;
