import RecoLoadingContent from "./ProduceLoadingContent";
import RecoLoadingBackground from "./ProduceLoadingBackground";
import MainLayout from "../../components/Layout/MainLayout";

const ProduceLoadingPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={RecoLoadingBackground}>
        <RecoLoadingContent />
      </MainLayout>
    </>
  );
};

export default ProduceLoadingPage;
