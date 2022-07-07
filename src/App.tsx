import { lazy } from "react";
import "./assets/app.scss";
import {Routes , Route} from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
const Main = lazy(() => import('./screens/main/Main'))
const App = () => {
  return (
    <div className="wrapper max-w-7xl">
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
