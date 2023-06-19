import { useParams } from "react-router-dom";
import './homeUser.scss';

import HomeDefault from "../HomeDefault/HomeDefault";

import Header from "../../components/Header/Header";

import WeightChart from "../../components/Article/Weight/Weight";
import RadarChart from "../../components/Article/Radar/Radar";
import LineChart from "../../components/Article/Goal/goal";
import CircleProgress from "../../components/Article/Score/Score";

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
                    <WeightChart userId={userId}/>
                    </div>
                    <div className="bloc2">
                    <LineChart />
                    <RadarChart />
                    <CircleProgress percentage={50} />
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
