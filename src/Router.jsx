import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";

import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import FragrancePage from "./pages/Fragrance/FragrancePage";
import ChatbotPage from "./pages/Chatbot/ChatbotPage";
import ChatPage from "./pages/Chat/ChatPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import LoadingPage from "./pages/Loading/LoadingPage";
import RecoPage from "./pages/Recommend/RecoPage";
import ProduceLoadingPage from "./pages/Loading/ProduceLoadingPage";
import AdminPage from "./pages/Admin/AdminPage";
import ManagePage from "./pages/Manage/ManagePage";

// 라우팅 설정
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.FRAGRANCE} element={<FragrancePage />} />
        <Route path={ROUTES.CHATBOT} element={<ChatbotPage />} />
        <Route path={ROUTES.CUSTOM_CHAT} element={<ChatPage />} />
        <Route path={ROUTES.ORIGINAL_CHAT} element={<ChatPage />} />
        <Route path={ROUTES.LOADING} element={<LoadingPage />} />
        <Route path={ROUTES.RECOMMEND} element={<RecoPage />} />
        <Route path={ROUTES.PRODUCE_LOADING} element={<ProduceLoadingPage />} />
        <Route path={ROUTES.ADMIN} element={<AdminPage />} />
        <Route path={`${ROUTES.MANAGE}/:deviceId`} element={<ManagePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
