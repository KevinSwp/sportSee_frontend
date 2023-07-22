import { Link } from "react-router-dom";
import error404 from "./404.png";
import "./error404.scss";
import Layout from '../../components/Layout/Layout';

function Error404 () {
    return (
        <Layout>
            <div className="error">
                <img className="error404" src={error404} alt="Erreur 404" />
                <p className="messageError">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="backHome" to="/">Retourner sur la page d'accueil</Link>
            </div>
        </Layout>
    )
}

export default Error404;