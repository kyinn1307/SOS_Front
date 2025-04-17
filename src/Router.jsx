import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";

import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import InfoPage from "./pages/Info/InfoPage";
import ChatbotPage from "./pages/Chatbot/ChatbotPage";
import ChatPage from "./pages/Chat/ChatPage";
import ChoicePage from "./pages/Choice/ChoicePage";
import LoadingPage from "./pages/Loading/LoadingPage";
import RecoPage from "./pages/Recommend/RecoPage";
import ProduceLoadingPage from "./pages/Loading/ProduceLoadingPage";
import AdminPage from "./pages/Admin/AdminPage";
import ManagePage from "./pages/Manage/ManagePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.INFO} element={<InfoPage />} />
        <Route path={ROUTES.CHATBOT} element={<ChatbotPage />} />
        <Route path={ROUTES.CHAT} element={<ChatPage />} />
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
