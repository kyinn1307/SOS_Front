import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginInputContainer>
        <Input type={"text"} placeholder={"ID를 입력하세요."} />
        <Input type={"password"} placeholder={"비밀번호를 입력하세요."} />
      </LoginInputContainer>
      <LoginButton>로그인</LoginButton>
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
