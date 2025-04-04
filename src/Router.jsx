import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

import LoginPage from "../pages/Login/LoginPage";
import MainPage from "../pages/Main/MainPage";
import InfoPage from "../pages/Info/InfoPage";
import ChatbotPage from "../pages/Chatbot/ChatbotPage";
import ChatPage from "../pages/Chat/ChatPage";
import ChoicePage from "../pages/Choice/ChoicePage";
import LoadingPage from "../pages/Choice/LoadingPage";
import RecoPage from "../pages/Recommend/RecoPage";
import ProduceLoadingPage from "../pages/Loading/ProduceLoadingPage";
import OriginalPage from "../pages/Original/OriginalPage";
import AdminPage from "../pages/Admin/AdminPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.INFO} element={<InfoPage />} />
        <Route path={ROUTES.CHATBOT} element={<ChatbotPage />} />
        <Route path={ROUTES.CHAT} element={<ChatPage />} />
        <Route path={ROUTES.CHOICE} element={<ChoicePage />} />
        <Route path={ROUTES.LOADING} element={<LoadingPage />} />
        <Route path={ROUTES.RECOMMEND} element={<RecoPage />} />
        <Route path={ROUTES.PRODUCE_LOADING} element={<ProduceLoadingPage />} />
        <Route path={ROUTES.ORIGINAL} element={<OriginalPage />} />
        <Route path={ROUTES.ADMIN} element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
