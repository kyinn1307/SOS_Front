import styled from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  border: none;
  background: none;
  width: 56px;
  height: 19px;
  font-size: 16px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

const Header = ({ openLogoutModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const shouldShowSettings =
    location.pathname === "/" ||
    location.pathname === "/admin" ||
    location.pathname === "/manage";

  const handleBtnClick = (path) => () => {
    navigate(path);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <HeaderContainer>
        <LogoWrapper onClick={handleBtnClick("/")}>
          <SosLogo />
        </LogoWrapper>
        {shouldShowSettings && (
          <SettingBtnField>
            <SettingBtn
              onClick={handleBtnClick("/admin")}
              active={
                location.pathname === "/admin" ||
                location.pathname === "/manage"
              }
            >
              기기관리
            </SettingBtn>
            <SettingBtn onClick={openLogoutModal}>로그아웃</SettingBtn>
          </SettingBtnField>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
