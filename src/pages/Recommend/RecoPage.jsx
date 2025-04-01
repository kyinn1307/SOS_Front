import ChatbotBackground from "../Chatbot/ChatbotBackground";
import RecoContent from "./RecoContent";
import MainLayout from "../../components/Layout/MainLayout";

const RecoPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={ChatbotBackground}>
        <RecoContent />
      </MainLayout>
    </>
  );
};

export default RecoPage;
