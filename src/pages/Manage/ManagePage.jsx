import { useParams } from "react-router-dom";
import AdminBackground from "./ManageBackground";
import ManageContent from "./ManageContent";
import MainLayout from "../../components/Layout/MainLayout";

const ManagePage = () => {
  const { deviceId } = useParams();

  return (
    <>
      <MainLayout BackgroundComponent={AdminBackground}>
        <ManageContent deviceId={deviceId} />
      </MainLayout>
    </>
  );
};

export default ManagePage;
