import ChoiceContent from "./ChoiceContent";
import ChatbotBackground from "../Chatbot/ChatbotBackground";
import MainLayout from "../../components/Layout/MainLayout";

const ChoicePage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={ChatbotBackground}>
        <ChoiceContent />
      </MainLayout>
    </>
  );
};

export default ChoicePage;
