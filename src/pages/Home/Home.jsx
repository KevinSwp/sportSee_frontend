import React, { useState, useEffect } from "react";
import './home.scss';
import Weight from "../../components/Weight/Weight";
import SimpleRadarChart from "../../components/Radar/Radar";
import SimpleLineChart from "../../components/Goal/goal";
import CircleProgress from "../../components/Score/Score";

function Home () {
    return (
        <div className="charts">
            <div className="bloc1">
                <Weight />
            </div>
            <div className="bloc2">
                <SimpleLineChart />
                <SimpleRadarChart />
                <CircleProgress percentage={66} />
            </div>
        </div>
    )
}

export default Home;
