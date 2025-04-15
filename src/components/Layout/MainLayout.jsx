import { useState } from "react";
import Header from "../Layout/Header";
import styled from "styled-components";
import LogoutModal from "../UI/LogoutModal";
import BlurLayer from "./BlurLayer";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

const MainLayout = ({ children, BackgroundComponent }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  return (
    <div>
      {BackgroundComponent && <BackgroundComponent />}
      <Header openLogoutModal={() => setIsLogoutModalOpen(true)} />
      <main>{children}</main>
      {isLogoutModalOpen && (
        <ModalOverlay>
          <BlurLayer />
          <ModalContainer>
            <LogoutModal onClose={() => setIsLogoutModalOpen(false)} />
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
};

export default MainLayout;
