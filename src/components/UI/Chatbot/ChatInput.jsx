import styled from "styled-components";
import { useState } from "react";
import { Routes, useNavigate } from "react-router-dom";
import ChatSendBtn from "../../../assets/chatbot/ChatSendBtn";
import { ROUTES } from "../../../constants/routes";

const ChatInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
  margin-top: 50.92px;
  gap: 13px;

  width: 914px;
  height: 181px;

  background: #fafaf8;
  box-shadow: 0px 0px 10px rgba(231, 221, 193, 0.5);
  border-radius: 15px;
`;

const ChatInputField = styled.textarea`
  position: relative;
  width: 798px;
  min-height: 155px;
  padding: 15px 22px;

  box-sizing: border-box;

  flex: 1;
  font-size: 17px;
  line-height: 170%;
  letter-spacing: -0.011em;
  color: #2c2c2c;
  resize: none;

  background: #fafaf8;
  box-shadow: inset 0px 0px 10px rgba(44, 44, 44, 0.1);
  border-radius: 10px;

  border: none;
  outline: none;

  &::placeholder {
    font-family: "Pretendard";

    font-weight: 400;
    font-size: 17px;
    line-height: 170%;
    letter-spacing: -0.011em;
    color: #d3d3d3;
  }
`;

const ChatSendBtnWrapper = styled.div`
  display: flex;
  height: 35px;
  align-self: flex-end;
`;
const ChatInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSendBtnClick = () => {
    if (inputValue.trim() !== "") {
      onSend(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <ChatInputContainer>
      <ChatInputField
        placeholder="당신의 감정을 자유롭게 표현해보세요! (모르겠음, 별로와 같은 간단한 답변은 피해주세요.)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ChatSendBtnWrapper onClick={handleSendBtnClick}>
        <ChatSendBtn />
      </ChatSendBtnWrapper>
    </ChatInputContainer>
  );
};

export default ChatInput;
