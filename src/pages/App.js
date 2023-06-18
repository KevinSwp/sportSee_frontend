import { Route, Routes } from "react-router-dom";
import './style.scss';
import '../components/aside.scss'

import Home from "./Home/Home";
import Profil from "./Profil/Profil";
import Community from "./Community/Community";
import Parameter from "./Parameter/Parameter";
import Error404 from "./Error404/Error404";

import Nav from "../components/Nav/Nav";

function App() {
  return (
    <div>
      <div className="container">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profil" element={<Profil />}/>
          <Route path="/parameter" element={<Parameter />}/>
          <Route path="/community" element={<Community />}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
