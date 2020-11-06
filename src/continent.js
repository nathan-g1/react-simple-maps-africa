import africa from './africa';
import React, { useState } from "react";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



import "./styles.css";


function Continent() {
    const [content, setContent] = useState("");
    const [moviedata, setMovieData] = useState("");
    const [image, setImage] = useState("");
    const [country, setCountry] = useState("");
    const options = ['ethiopia','ghana','mali','morocco','rwanda']; // filter countries in Africa
    const defaultOption = options[0];

    return (
        <div>
            <div className='mapcontainer'>
                <MapChart setTooltipContent={setContent} setMovieDataContent={setMovieData} setImageContent={setImage} />
            </div>
            {content.length !== 0 && (<ReactTooltip>
                <h5>{content}</h5>
                <small>Total ugly Movies: {moviedata}</small><br />
                <small>Wanaw Love new: 10</small><br />
                <small>Stupid actresses: 1.9M</small>
            </ReactTooltip>)}
            <div className='countrylist'>
                <Dropdown options={options} onChange={setCountry} value={defaultOption} placeholder="Select an option" />
            </div>
            {image.length !== 0 && (<>
                <div>Details: {content}</div>
                <div>image</div>
                <img src={require(`${image}`)} alt={content} width="100" />
            </>)}

        </div>
    );
}

export default Continent;
