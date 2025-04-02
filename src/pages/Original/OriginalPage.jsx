import OriginalContent from "./OriginalContent";
import ChatbotBackground from "../Chatbot/ChatbotBackground";
import MainLayout from "../../components/Layout/MainLayout";

const OriginalPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={ChatbotBackground}>
        <OriginalContent />
      </MainLayout>
    </>
  );
};

export default OriginalPage;
