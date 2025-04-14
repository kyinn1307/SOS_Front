const IconBigShadow = () => {
  return (
    <svg
      width="292"
      height="291"
      viewBox="0 0 292 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2073_5)">
        <ellipse cx="146" cy="145.5" rx="138" ry="137.5" fill="#F3F3EA" />
      </g>
      <defs>
        <filter
          id="filter0_d_2073_5"
          x="0"
          y="0"
          width="292"
          height="291"
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
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.905452 0 0 0 0 0.867979 0 0 0 0 0.755561 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2073_5"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2073_5"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconBigShadow;
