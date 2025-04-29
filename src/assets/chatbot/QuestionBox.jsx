import styled from "styled-components";

const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 112px;
  padding: 20px 15px;
  box-sizing: border-box;
`;

const SvgBackground = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 388px;
  height: 112px;
  z-index: 0;
`;

const QuestionWrapper = styled.div`
  position: relative;
  z-index: 1;

  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;

  width: 100%;
  max-width: 388px;

  background: linear-gradient(90deg, #7ed1dd 0%, #f1b1d6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const QuestionBox = ({ children }) => {
  return (
    <QuestionContainer>
      <SvgBackground
        viewBox="0 0 388 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2284_417)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41 15C32.7157 15 26 21.7157 26 30L26 86L15 97L30 97L358 97C366.284 97 373 90.2843 373 82L373 30C373 21.7157 366.284 15 358 15L41 15Z"
            fill="#FAFAF8"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2284_417"
            x="0"
            y="0"
            width="388"
            height="112"
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
              result="effect1_dropShadow_2284_417"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2284_417"
              result="shape"
            />
          </filter>
        </defs>
      </SvgBackground>
      <QuestionWrapper>{children}</QuestionWrapper>
    </QuestionContainer>
  );
};

export default QuestionBox;
