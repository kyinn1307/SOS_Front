import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SosLogo from "../../assets/sos_logo";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  margin-left: 36px;
`;

const SettingBtnField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 52px;
  margin-right: 49px;
`;

const SettingBtn = styled.button`
  font-family: "Pretendard";
  border: none;
  background: none;
  width: 56px;
  height: 19px;
  font-size: 16px;
  cursor: pointer;
`;

const Header = () => {
  const location = useLocation();

  const shouldShowSettings = location.pathname === "/";

  return (
    <>
      <HeaderContainer>
        <LogoWrapper>
          <SosLogo />
        </LogoWrapper>
        {shouldShowSettings && (
          <SettingBtnField>
            <SettingBtn>기기관리</SettingBtn>
            <SettingBtn>로그아웃</SettingBtn>
          </SettingBtnField>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
