import styled from "styled-components";
import { useState, useEffect } from "react";
import RefillModalBtn from "./RefillModalBtn";
import DeleteBtn from "../../../assets/manage/DeleteBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 435px;
  height: 325px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const ChoiceBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  width: 100%;
  height: 31px;
  margin-top: 14px;
  margin-right: 130px;
`;

const ChoiceBtnWrapper = styled.label`
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;
`;

const CircleInput = styled.input`
  width: 18px;
  height: 18px;
  margin: 0;
`;

const Input = styled.input`
  width: 257px;
  height: 39px;
  background: #fafaf8;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  font-size: 18px;
  color: #aaaaaa;
  padding: 4px 12px;
  box-sizing: border-box;

  &:disabled {
    background: #efefef;
    color: #cccccc;
  }
  &:disabled::placeholder {
    color: #cccccc;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
  color: #2c2c2c;
`;

const Text = styled.div`
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  margin-right: 53px;
  margin-top: ${({ mt }) => mt || "14px"};
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
`;

const DeleteBtnWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 396px;
  cursor: pointer;
`;

const RefillContentModal = ({ flavor, onClose, onComplete }) => {
  const [mode, setMode] = useState("refill");

  const handleClick = () => {
    onComplete();
  };

  return (
    <Container>
      <Title>향료 추가하기</Title>
      <DeleteBtnWrapper onClick={onClose}>
        <DeleteBtn />
      </DeleteBtnWrapper>{" "}
      <Row mt="16px">
        <Text>선택한 향료</Text>
        <Input value={flavor?.name || ""} disabled />
      </Row>
      <ChoiceBtnContainer>
        <ChoiceBtnWrapper>
          <CircleInput
            type="radio"
            name="mode"
            value="refill"
            checked={mode === "refill"}
            onChange={() => setMode("refill")}
          />
          <Text>용액추가</Text>
        </ChoiceBtnWrapper>
        <ChoiceBtnWrapper>
          <CircleInput
            type="radio"
            name="mode"
            value="replace"
            checked={mode === "replace"}
            onChange={() => setMode("replace")}
          />
          <Text>카트리지 교체</Text>
        </ChoiceBtnWrapper>
      </ChoiceBtnContainer>
      <Row>
        <Text>추가할 용량(ml)</Text>
        <Input
          placeholder="용량을 정확히 입력해 주세요."
          disabled={mode !== "refill"}
        />
      </Row>
      <Row mt="11px">
        <Text>총 용량(ml)</Text>
        <Input disabled={mode !== "refill"} />
      </Row>
      <BtnWrapper>
        <RefillModalBtn onClick={handleClick} />
      </BtnWrapper>
    </Container>
  );
};

export default RefillContentModal;
