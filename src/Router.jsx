import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import InfoPage from "./pages/Info/InfoPage";
import ChatbotPage from "./pages/Chatbot/ChatbotPage";
import ChatPage from "./pages/Chat/ChatPage";
import ChoicePage from "./pages/Choice/ChoicePage";
import LoadingPage from "./pages/Choice/LoadingPage";
import RecoPage from "./pages/Recommend/RecoPage";
import RecoLoadingPage from "./pages/Recommend/RecoLoadingPage";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={isLoggedIn ? <MainPage /> : <LoginPage />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/reco" element={<RecoPage />} />
        <Route path="/recoload" element={<RecoLoadingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
