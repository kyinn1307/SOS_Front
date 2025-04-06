import AdminBackground from "./ManageBackground";
import ManageContent from "./ManageContent";
import MainLayout from "../../components/Layout/MainLayout";

const ManagePage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={AdminBackground}>
        <ManageContent />
      </MainLayout>
    </>
  );
};

export default ManagePage;
