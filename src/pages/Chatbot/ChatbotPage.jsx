import ChatbotBackground from "./ChatbotBackground";
import ChatbotContent from "./ChatbotContent";
import MainLayout from "../../components/Layout/MainLayout";

const ChatbotPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={ChatbotBackground}>
        <ChatbotContent />
      </MainLayout>
    </>
  );
};

export default ChatbotPage;
