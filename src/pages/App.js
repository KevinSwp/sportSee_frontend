// Import components react
import { Route, Routes } from "react-router-dom";
// Import scss
import './body.scss';
import '../components/MacroNutriments/macroNutriments.scss'
// Import component created
import HomeUser from "./Homes/HomeUser";
import Profil from "./Profil/Profil";
import Community from "./Community/Community";
import Parameter from "./Parameter/Parameter";
import Error404 from "./Error404/Error404";

import DevelopperActivity from "./Developer/Activity/Dev_Activity";
import DevelopperPerformance from "./Developer/Performance/Dev_Performance";
import DevelopperMain from "./Developer/Main/Dev_Main";
import DevelopperSession from "./Developer/Session/Dev_Session";



/**
 * Function component App
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/parameter" element={<Parameter />} />
      <Route path="/community" element={<Community />} />

      <Route path="/user/:userId/activity" element={<DevelopperActivity />} />
      <Route path="/user/:userId/performance" element={<DevelopperPerformance />} />
      <Route path="/user/:userId/main" element={<DevelopperMain />} />
      <Route path="/user/:userId/session" element={<DevelopperSession />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
