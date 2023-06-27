// Import components react
import { Link } from "react-router-dom";

import './homeDefault.scss'

function HomeDefault () {
    return (
        <div>
            <p>Choisir un utilisateur</p>
            <div className="userChoice">
                <Link to="/user/12">User 12</Link>
                <Link to="/user/18">User 18</Link>
            </div>
        </div>
    )
}

export default HomeDefault;