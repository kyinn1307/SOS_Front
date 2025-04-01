import RecoLoadingContent from "./RecoLoadingContent";
import RecoLoadingBackground from "./RecoLoadingBackground";
import MainLayout from "../../components/Layout/MainLayout";

const RecoLoadingPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={RecoLoadingBackground}>
        <RecoLoadingContent />
      </MainLayout>
    </>
  );
};

export default RecoLoadingPage;
