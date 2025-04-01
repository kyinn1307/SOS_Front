import LoadingContent from "./LoadingContent";
import LoadingBackground from "./LoadingBackground";
import MainLayout from "../../components/Layout/MainLayout";

const LoadingPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={LoadingBackground}>
        <LoadingContent />
      </MainLayout>
    </>
  );
};

export default LoadingPage;
