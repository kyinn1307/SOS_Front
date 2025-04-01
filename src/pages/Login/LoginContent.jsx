import styled from "styled-components";
import LoginForm from "../../components/UI/Login/LoginForm";
import SosLetterLogo from "../../assets/main/sos_letter_logo";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 20px;
  text-align: center;
`;

const LogoWrapper = styled.div`
  margin-top: 162px;
`;

const LoginContent = () => {
  return (
    <ContentWrapper>
      <LogoWrapper>
        <SosLetterLogo />
      </LogoWrapper>
      <LoginForm />
    </ContentWrapper>
  );
};

export default LoginContent;
