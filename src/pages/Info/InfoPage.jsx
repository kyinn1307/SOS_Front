import InfoBackground from "./InfoBackground";
import InfoContent from "./InfoContent";
import MainLayout from "../../components/Layout/MainLayout";

const InfoPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={InfoBackground}>
        <InfoContent />
      </MainLayout>
    </>
  );
};

export default InfoPage;
