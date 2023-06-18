import { NavLink } from "react-router-dom";
import './nav.scss';
import logo from "./logo.svg";
import yoga from "./yoga.svg";
import swim from "./swim.svg";
import bike from "./bike.svg";
import muscu from "./muscu.svg";

function Navigation () {
    return  (
        <div className="navigations">
            <div className="navigationTop">
                <NavLink to="/">
                    <div className="Logo_Home">
                        <img src={logo} alt="Lien vers la page d'accueil" />
                    </div>
                </NavLink>

                <div className="blocLinks">
                    <ul className="links">
                        <li>
                            <NavLink to="/">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Profil">
                                Profil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/parameter">
                                Réglage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/community">
                                Communauté
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navigationLeft">
                <div className="blocs">
                    <div className="blocIcons">
                        <div className="yogaIcon">
                            <img src={yoga} alt="#" />
                        </div>
                        <div className="swimIcon">
                            <img src={swim} alt="#" />
                        </div>
                        <div className="bikeIcon">
                            <img src={bike} alt="#" />
                        </div>
                        <div className="muscuIcon">
                            <img src={muscu} alt="#" />
                        </div>
                    </div>

                    <div className="text">
                        <p>Copiryght, SportSee 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;