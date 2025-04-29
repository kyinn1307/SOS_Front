import AdminBackground from "./AdminBackground";
import AdminContent from "./AdminContent";
import MainLayout from "../../components/Layout/MainLayout";

const AdminPage = () => {
  return (
    <>
      <MainLayout BackgroundComponent={AdminBackground}>
        <AdminContent />
      </MainLayout>
    </>
  );
};

export default AdminPage;
