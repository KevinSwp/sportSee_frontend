import React, { useState, useEffect } from "react";
import './home.scss';

import Header from "../../components/Header/Header";

import WeightChart from "../../components/Article/Weight/Weight";
import RadarChart from "../../components/Article/Radar/Radar";
import LineChart from "../../components/Article/Goal/goal";
import CircleProgress from "../../components/Article/Score/Score";

import Calories from "../../components/Aside/Calorie/Calorie";
import Lipid from "../../components/Aside/Lipid/Lipid";
import Protein from "../../components/Aside/Protein/Protein";
import Carbohydrate from "../../components/Aside/Carbohydrate/Carbohydrate";


function Home () {
    return (
        <div>
            <header className='header'>
                <Header />
            </header>
            <section className="blocInfos">
                <article className="charts">
                    <div className="bloc1">
                        <WeightChart />
                    </div>
                    <div className="bloc2">
                        <LineChart />
                        <RadarChart />
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
        </div>
    )
}

export default Home;
