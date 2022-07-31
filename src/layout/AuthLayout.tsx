import { Route, Routes } from "react-router-dom";
import NotFound from "../screens/404/NotFound";
import Signin from "../screens/signin/Signin";
const AuthLayout = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthLayout;
