import ChatContent from "./ChatContent";
import ChatbotBackground from "../Chatbot/ChatbotBackground";
import MainLayout from "../../components/Layout/MainLayout";

const ChatPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={ChatbotBackground}>
        <ChatContent />
      </MainLayout>
    </>
  );
};

export default ChatPage;
