import Header from "../Layout/Header";

const MainLayout = ({ children, BackgroundComponent }) => {
  return (
    <div>
      {BackgroundComponent && <BackgroundComponent />}
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
