// details
import React, { useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';


const Country = (pops) => {
    const [coountry, setCountryData] = useState("");
    const location = useLocation();
    useEffect(() => (setCountryData(location.state.message)));
    return (
        <div>
            <h5>{coountry}</h5>
            <small>Total ugly Movies: s</small><br />
            <small>Wanaw Love new: 10</small><br />
            <small>Stupid actresses: 1.9M</small>
        </div>
    );
}

export default Country;