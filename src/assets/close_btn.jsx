const CloseBtn = () => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
    >
      <g filter="url(#filter0_d_2579_218)">
        <ellipse
          cx="35"
          cy="35"
          rx="25"
          ry="25"
          transform="rotate(-90 35 35)"
          fill="#FAFAF8"
        />
        <path
          d="M44.0908 44.0909L25.9089 25.9089"
          stroke="#2C2C2C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.0908 25.9089L25.9089 44.0909"
          stroke="#2C2C2C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2579_218"
          x="0"
          y="0"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.172549 0 0 0 0 0.172549 0 0 0 0 0.172549 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2579_218"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2579_218"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CloseBtn;
