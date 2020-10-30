
import React, { useState } from "react";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import "./styles.css";

function Continent() {
    const [content, setContent] = useState("");
    const [moviedata, setMovieData] = useState("");
    return (
        <div>
            <MapChart setTooltipContent={setContent} setMovieDataContent={setMovieData} />
            <ReactTooltip>
                <h5>{content}</h5>
                <small>Total ugly Movies: {moviedata}</small><br />
                <small>Wanaw Love new: 10</small><br />
                <small>Stupid actresses: 1.9M</small>
            </ReactTooltip>
        </div>
    );
}

export default Continent;
