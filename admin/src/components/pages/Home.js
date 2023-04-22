import React from "react"

import Graph from "./Graph";
import Table from "./Table";

function Home() {
    return (
        <div className="container">
            <div className="row">
                    <Graph />
            </div>
                    <Table />
        </div>
    );
}

export default Home;
