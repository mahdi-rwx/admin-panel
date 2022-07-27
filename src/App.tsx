import Signin from "./screens/signin/Signin";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import "./assets/app.scss";

const App = () => {
  const PrivateRoute = () => {
    return <MainLayout />;
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
};

export default App;
