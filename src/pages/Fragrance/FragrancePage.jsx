import FragranceBackground from "./FragranceBackground";
import FragranceContent from "./FragranceContent";
import MainLayout from "../../components/Layout/MainLayout";

const FragrancePage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={FragranceBackground}>
        <FragranceContent />
      </MainLayout>
    </>
  );
};

export default FragrancePage;
