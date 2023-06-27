import Activity from "../../components/Article/Activity/Activity";

import { useParams } from "react-router-dom";

function PageActivity () {
    const { userId } = useParams();

    return (
        <div>
            <section className="blocInfos">
                <article className="charts">
                    <div className="bloc1">
                        <Activity userId={userId}/>
                    </div>
                </article>
            </section>
        </div>
    );
  }

export default PageActivity;
