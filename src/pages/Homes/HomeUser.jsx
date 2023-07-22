import Main from "../../components/Main/Main";

import Activity from "../../components/Graphics/Activity/Activity";
import Performance from "../../components/Graphics/Performance/Performance";
import Session from "../../components/Graphics/Session/Session";
import Score from "../../components/Graphics/Score/Score";

import Calories from "../../components/MacroNutriments/Calorie/Calorie";
import Lipid from "../../components/MacroNutriments/Lipid/Lipid";
import Protein from "../../components/MacroNutriments/Protein/Protein";
import Carbohydrate from "../../components/MacroNutriments/Carbohydrate/Carbohydrate";
import Layout from '../../components/Layout/Layout';

import './homeUser.scss';

function HomeUser() {
    const userId = process.env.REACT_APP_USER_ID

    return (
        <Layout>
            <header className='header'>
                <Main userId={userId} />
            </header>
            <section className="blocInfos">
                <article className="charts">
                    <div className="bloc1">
                        <Activity userId={userId} />
                    </div>
                    <div className="bloc2">
                        <div>
                            <Session userId={userId} />
                        </div>
                        <div>
                            <Performance userId={userId} />
                        </div>

                        <div>
                            <Score userId={userId} />
                        </div>
                    </div>
                </article>
                <aside className="aside">
                    <Calories userId={userId} />
                    <Protein userId={userId} />
                    <Carbohydrate userId={userId} />
                    <Lipid userId={userId} />
                </aside>
            </section>
        </Layout>
    );
}

export default HomeUser;
