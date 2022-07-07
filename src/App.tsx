import { lazy } from "react";
import "./assets/app.scss";
import {Routes , Route} from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
const Main = lazy(() => import('./screens/main/Main'))
const App = () => {
    // <div className="wrapper max-w-7xl">
    //   <div
    //     className={`sidebar h-screen transition-all inline-block bg-red-200`}
    //   >
    //     sidebar
    //   </div>
    //   <div className={`panel inline-block bg-green-200`}>panel</div>
    // </div>
  return (
    <div className="wrapper max-w-7xl">
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
