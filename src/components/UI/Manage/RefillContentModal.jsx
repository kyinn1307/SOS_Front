import styled from "styled-components";
import RefillModalBtn from "./RefillModalBtn";

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
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 31px;
  margin-top: 14px;
  gap: 20px;
  justify-content: flex-end;
  margin-right: 130px;
`;

const ChoiceBtnWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 7px;
  align-items: center;
`;
const CircleInput = styled.input`
  position: relative;
  width: 18px;
  height: 18px;
  margin: 0;
`;

const Input = styled.input`
  position: relative;
  width: 257px;
  height: 39px;
  box-sizing: border-box;
  background: #fafaf8;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  font-size: 18px;
  line-height: 170%;
  letter-spacing: -0.011em;
  color: #aaaaaa;
  padding: 4px 12px;
`;

const Title = styled.div`
  width: 109px;
  height: 22px;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #2c2c2c;
  margin-top: 20px;
  align-items: center;
`;

const Text = styled.div`
  position: relative;
`;

const Name = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 16px;
  align-items: center;
  gap: 18px;
  margin-right: 53px;
`;

const Refill = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 18px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 14px;
  margin-right: 53px;
`;

const Total = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: flex-end;
  margin-top: 11px;
  align-items: center;
  margin-right: 53px;
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
`;

const RefillContentModal = ({ flavor, onClose }) => {
  return (
    <Container>
      <Title>향료 추가하기</Title>
      <Name>
        <Text>선택한 향료</Text>
        <Input placeholder="향료이름" />
      </Name>
      <ChoiceBtnContainer>
        <ChoiceBtnWrapper>
          <CircleInput type="radio" />
          <Text>용액추가</Text>
        </ChoiceBtnWrapper>
        <ChoiceBtnWrapper>
          <CircleInput type="radio" />
          <Text>카트리지 교체</Text>
        </ChoiceBtnWrapper>
      </ChoiceBtnContainer>
      <Refill>
        <Text>추가할 용량(ml)</Text>
        <Input placeholder="용량을 정확히 입력해 주세요." />
      </Refill>
      <Total>
        <Text>총 용량(ml)</Text>
        <Input />
      </Total>
      <BtnWrapper>
        <RefillModalBtn onClick={onClose} />
      </BtnWrapper>
    </Container>
  );
};

export default RefillContentModal;
