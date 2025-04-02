import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === "1234" && password === "1234") {
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <LoginFormContainer onSubmit={handleLogin}>
      <LoginInputContainer>
        <Input
          type="text"
          placeholder="ID를 입력하세요."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </LoginInputContainer>
      <LoginButton type="submit">로그인</LoginButton>
    </LoginFormContainer>
  );
};

export default LoginForm;

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 60.5px 0 0 0;
  gap: 54px;
  .id-input {
    width: 372px;
    height: 44px;
    font-size: 17px;
  }
`;

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const LoginButton = styled(Button)`
  position: relative;
  padding: 8px 0;
  width: 372px;
  height: 47px;
  font-size: 18px;
  font-family: "Pretendard", sans-serif;
`;
