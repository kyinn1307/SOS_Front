import styled from "styled-components";
import { useState, useEffect } from "react";
import RefillModalBtn from "../Buttons/RefillModalBtn";
import DeleteBtn from "../../../../assets/manage/DeleteBtn";
import StyledBtn from "../../common/StyledBtn";
import { refillCartridge } from "../../../../api/apis/cartridge";
import { replaceCartridge } from "../../../../api/apis/cartridge";

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

  ::placeholder {
    color: #cccccc;
  }

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

const RefillContentModal = ({ catridge, onClose, onComplete }) => {
  const [mode, setMode] = useState("refill");
  const [amount, setAmount] = useState("");

  const beforeAmount = catridge.currentAmount ?? 0;
  const totalAmount = catridge.totalCapacity ?? 200;

  const refilledAmount = Number(amount);

  const afterAmount =
    mode === "refill" && !isNaN(refilledAmount)
      ? Math.min(beforeAmount + refilledAmount, totalAmount)
      : mode === "replace"
      ? totalAmount
      : beforeAmount;

  const handleClick = async () => {
    const { deviceId, cartridgeId, fragranceName } = catridge;

    if (!deviceId || !cartridgeId) {
      alert("기기 또는 카트리지 정보가 없습니다.");
      console.log(deviceId, cartridgeId);
      return;
    }

    if (mode === "refill") {
      if (!amount || isNaN(amount)) {
        alert("추가할 용량을 숫자로 입력해 주세요.");
        return;
      }

      const refilledAmount = Number(amount) + beforeAmount;

      try {
        // console.log(refilledAmount);
        await refillCartridge(deviceId, cartridgeId, {
          refilledAmount: refilledAmount,
        });

        console.log("용액이 성공적으로 추가되었습니다!");
        if (onComplete) {
          onComplete({
            flavorName: catridge.fragranceName,
            beforeAmount,
            afterAmount,
          });
        }
      } catch (error) {
        const msg = error?.response?.data?.message || "추가에 실패했습니다.";
        console.log(msg);
      }
    } else if (mode === "replace") {
      try {
        await replaceCartridge(deviceId, cartridgeId);

        console.log("카트리지 교체 성공");

        if (onComplete) {
          onComplete({
            flavorName: catridge.fragranceName,
            beforeAmount,
            afterAmount: totalAmount,
          });
        }
      } catch (error) {
        const msg = error?.response?.data?.message || "교체에 실패했습니다.";
        console.log(msg);
      }
    }
  };

  return (
    <Container>
      <Title>향료 추가하기</Title>
      <DeleteBtnWrapper onClick={onClose}>
        <DeleteBtn />
      </DeleteBtnWrapper>
      <Row mt="16px">
        <Text>선택한 향료</Text>
        <Input value={catridge?.fragranceName || ""} disabled />
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
          value={amount}
          disabled={mode !== "refill"}
          onChange={(e) => setAmount(e.target.value)}
          onBlur={() => {
            const refillAmountNum = Number(amount);
            if (
              mode === "refill" &&
              !isNaN(refillAmountNum) &&
              refillAmountNum + beforeAmount > totalAmount
            ) {
              const maxAvailable = totalAmount - beforeAmount;
              setAmount(String(maxAvailable));
            }
          }}
        />
      </Row>
      <Row mt="11px">
        <Text>총 용량(ml)</Text>
        <Input value={mode === "refill" ? afterAmount : totalAmount} disabled />
      </Row>
      <BtnWrapper>
        <StyledBtn
          variant="black"
          isModal={true}
          onClick={handleClick}
          width="250px"
          paddingLeft={"42.83px"}
        >
          용액 추가 및 교체하기
        </StyledBtn>
      </BtnWrapper>
    </Container>
  );
};

export default RefillContentModal;
