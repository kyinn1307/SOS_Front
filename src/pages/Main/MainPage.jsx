import MainBackground from "./MainBackground";
import MainContent from "./MainContent";
import MainLayout from "../../components/Layout/MainLayout";

const MainPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={MainBackground}>
        <MainContent />
      </MainLayout>
    </>
  );
};

export default MainPage;
