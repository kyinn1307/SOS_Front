import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../api/apis/auth";
import { useAuthStore } from "../../../store/authStore";

import Button from "../common/Button";
import Input from "../common/Input";

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 60.5px 0 0 0;
  gap: 54px;
`;

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const InputRow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  position: relative;
  padding: 8px 0;
  width: 372px;
  height: 47px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
`;

const Text = styled.div`
  position: absolute;
  width: 100px;
  right: 100%;
  margin-right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #2c2c2c;
  text-align: right;
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginAuth = useAuthStore((state) => state.login);

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      loginAuth({ accessToken, refreshToken });
      console.log("로그인 성공");
      navigate("/");
    },
    onError: (error) => {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log(error);
      console.log(username, password);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutate({ username, password });
  };

  return (
    <LoginFormContainer onSubmit={handleLogin}>
      <LoginInputContainer>
        <InputRow>
          <Text>ID</Text>
          <Input
            type="text"
            placeholder="ID를 입력하세요."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputRow>
        <InputRow>
          <Text>비밀번호</Text>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputRow>
      </LoginInputContainer>
      <LoginButton type="submit">로그인</LoginButton>
    </LoginFormContainer>
  );
};

export default LoginForm;
