import styled from "styled-components";
import SosLoginBgBottom from "../../assets/login/sos_login_bg_bottom";
import SosLoginBgTop from "../../assets/login/sos_login_bg_top";

const LoginBgWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  background-size: cover;
  background-position: center;
  background-color: #edf6f8;
  z-index: -1;
`;

const WrapperBottom = styled.div`
  position: absolute;
  z-index: 0;
  top: 400px;
  left: 640px;
`;

const WrapperTop = styled.div`
  position: absolute;
  top: -28px;
  right: 999px;

  z-index: 0;
`;
const LoginBackground = () => {
  return (
    <>
      <LoginBgWrapper>
        <WrapperTop>
          <SosLoginBgTop />
        </WrapperTop>
        <WrapperBottom>
          <SosLoginBgBottom />
        </WrapperBottom>
      </LoginBgWrapper>
    </>
  );
};

export default LoginBackground;
