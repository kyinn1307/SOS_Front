import styled from "styled-components";

const CommentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 116px;
`;

const TextContainer = styled.div`
  position: absolute;

  font-size: 17px;
  line-height: 170%;
  letter-spacing: -0.011em;
`;

const CommentBox = ({ children }) => {
  return (
    <CommentWrapper>
      <svg
        width="430"
        height="146"
        viewBox="0 0 430 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2073_8)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 15C21.7157 15 15 21.7157 15 30L15 104C15 112.284 21.7157 119 30 119L205.219 119L215 131L224.781 119L400 119C408.284 119 415 112.284 415 104L415 30C415 21.7157 408.284 15 400 15L30 15Z"
            fill="#FAFAF8"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2073_8"
            x="0"
            y="0"
            width="430"
            height="146"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.905882 0 0 0 0 0.866667 0 0 0 0 0.756863 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2073_8"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2073_8"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <TextContainer>{children}</TextContainer>
    </CommentWrapper>
  );
};

export default CommentBox;
