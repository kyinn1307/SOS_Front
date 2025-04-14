const ScrollBtn = ({ onClick }) => {
  return (
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      cursor="pointer"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.8784 0.546411C16.2012 0.869193 16.2012 1.39253 15.8784 1.71531L8.13083 9.46292L0.583929 1.91602C0.261147 1.59324 0.261148 1.06991 0.58393 0.747125C0.906711 0.424344 1.43004 0.424344 1.75283 0.747125L8.13083 7.12513L14.7095 0.546411C15.0323 0.223629 15.5557 0.223629 15.8784 0.546411Z"
        fill="#2C2C2C"
      />
    </svg>
  );
};

export default ScrollBtn;
