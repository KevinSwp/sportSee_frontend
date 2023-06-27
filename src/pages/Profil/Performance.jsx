import Performance from "../../components/Article/Performance/Performance";

import { useParams } from "react-router-dom";

function PagePerformance () {
    const { userId } = useParams();

    return (
        <div>
            <section className="blocInfos">
                <article className="charts">
                    <div className="bloc2">
                        <div>
                            <Performance userId={userId}/>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
  }

export default PagePerformance;
