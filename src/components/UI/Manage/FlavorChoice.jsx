import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ScrollBtn from "../../../assets/scroll_btn";

const Container = styled.div`
  position: relative;
  width: 257px;
  height: 39px;
`;

const SelectBox = styled.div`
  padding: 9px 12px;
  border: 1px solid #ccc;
  background-color: #fafaf8;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  text-align: left;
`;

const Dropdown = styled.ul`
  margin: 0;
  position: absolute;
  width: 100%;
  background-color: #fafaf8;
  border: 1px solid #ccc;
  max-height: 191px;
  overflow-y: auto;
  z-index: 10;
  text-align: left;
`;

const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 9px;
  right: 10.54px;
`;

const FlavorChoice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const containerRef = useRef(null);

  const flavorOptions = [
    "배롱나무",
    "감나무",
    "경포대",
    "은행나무",
    "차수국",
    "태백산맥",
    "밤장미",
    "벚꽃",
    "안목해변",
    "소나무",
  ];

  const handleSelect = (flavor) => {
    setSelectedFlavor(flavor);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <SelectBox onClick={() => setIsOpen((prev) => !prev)}>
        {selectedFlavor || "향료이름"}
        <BtnWrapper>
          <ScrollBtn />
        </BtnWrapper>
      </SelectBox>
      {isOpen && (
        <Dropdown>
          {flavorOptions.map((flavor, index) => (
            <Option key={index} onClick={() => handleSelect(flavor)}>
              {flavor}
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default FlavorChoice;
