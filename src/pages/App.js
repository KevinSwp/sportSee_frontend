// Import components react
import { Route, Routes } from "react-router-dom";
// Import scss
import './body.scss';
import '../components/Aside/aside.scss'
// Import component created
import HomeDefault from "./HomeDefault/HomeDefault";
import HomeUser from "./Homes/HomeUser";
import Profil from "./Profil/Profil";
import Community from "./Community/Community";
import Parameter from "./Parameter/Parameter";
import Error404 from "./Error404/Error404";

import Nav from "../components/Nav/Nav";

/**
 * Function component App
 */
function App() {
  return (
    <div>
      <div className="container">
        <Nav />

        <Routes>
          <Route path="/" element={<HomeDefault />} />
          <Route path="/" element={<HomeUser />} />
          <Route path="/user/:userId" element={<HomeUser />} />
          <Route path="/profil" element={<Profil />}/>
          <Route path="/parameter" element={<Parameter />}/>
          <Route path="/community" element={<Community />}/>
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
