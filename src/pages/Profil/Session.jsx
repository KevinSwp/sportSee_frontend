import Session from "../../components/Article/Session/Session";

import { useParams } from "react-router-dom";

function PageSession () {
    const { userId } = useParams();

    return (
        <div>
            <section className="blocInfos">
                <article className="charts">
                    <div className="bloc2">
                        <div>
                            <Session userId={userId}/>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
  }

export default PageSession;
