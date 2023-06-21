import { useParams } from "react-router-dom";
import './homeUser.scss';

import HomeDefault from "../HomeDefault/HomeDefault";

import Header from "../../components/Header/Header";

import Activity from "../../components/Article/Activity/Activity";
import Performance from "../../components/Article/Performance/Performance";
import Session from "../../components/Article/Session/Session";
import Score from "../../components/Article/Score/Score";

import Calories from "../../components/Aside/Calorie/Calorie";
import Lipid from "../../components/Aside/Lipid/Lipid";
import Protein from "../../components/Aside/Protein/Protein";
import Carbohydrate from "../../components/Aside/Carbohydrate/Carbohydrate";


function HomeUser () {
    const { userId } = useParams();
  
    return (
        <div>
            {userId ? (
                <>
                    <header className='header'>
                        <Header />
                    </header>
                    <section className="blocInfos">
                        <article className="charts">
                            <div className="bloc1">
                                <Activity userId={userId}/>
                            </div>
                            <div className="bloc2">
                                <div>
                                    <Session userId={userId}/>
                                </div>
                                <div>
                                    <Performance userId={userId}/>
                                </div>
                                <div>
                                    <Score userId={userId} />
                                </div>
                            </div>
                        </article>
                        <aside className="aside">
                            <Calories userId={userId} />
                            <Protein userId={userId}/>
                            <Carbohydrate userId={userId}/>
                            <Lipid userId={userId}/>
                        </aside>
                    </section>
                </>
            ):(<HomeDefault />)
            }
        </div>
    );
  }

export default HomeUser;
