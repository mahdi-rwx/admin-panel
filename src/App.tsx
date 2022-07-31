import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import "./assets/app.scss";
import AuthLayout from "./layout/AuthLayout";

const App = () => {
  const ProtectRoute = () => {
    return <MainLayout />;
  };
  const AuthRoute = () => {
    return <AuthLayout />;
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="/*" element={<ProtectRoute />} />
      </Routes>
    </div>
  );
};

export default App;
