import React, { useState, useEffect } from "react";
import './home.scss';

import Weight from "../../components/Weight/Weight";
import SimpleRadarChart from "../../components/Radar/Radar";
import SimpleLineChart from "../../components/Goal/goal";
import CircleProgress from "../../components/Score/Score";

import Calories from "../../components/Calorie/Calorie";
import Lipid from "../../components/Lipid/Lipid";
import Protein from "../../components/Protein/Protein";
import Carbohydrate from "../../components/Carbohydrate/Carbohydrate";


function Home () {
    return (
        <section className="blocInfos">
            <article className="charts">
                <div className="bloc1">
                    <Weight />
                </div>
                <div className="bloc2">
                    <SimpleLineChart />
                    <SimpleRadarChart />
                    <CircleProgress percentage={66} />
                </div>
            </article>
            <aside className="aside">
                <Calories />
                <Protein />
                <Carbohydrate />
                <Lipid />
            </aside>
        </section>
    )
}

export default Home;
